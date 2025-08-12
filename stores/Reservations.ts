import { defineStore } from 'pinia';
import { collection, addDoc, getDocs, query, where, updateDoc, doc } from 'firebase/firestore';

// Define the Reservation interface
interface Reservation {
  id?: string; // Optional id field for the reservation
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  userId: string;
  username?: string; // Optional username field
  status: 'pending' | 'confirmed' | 'declined'; // Status field
}

export const useReservationsStore = defineStore('reservations', {
  state: () => ({
    reservations: [] as Reservation[], // Explicitly type the reservations array
  }),
  actions: {
    // Fetch reservations for a specific user
    async fetchReservations(userId: string) {
      const { $db } = useNuxtApp();
      try {
        const reservationsRef = collection($db, 'reservations');
        console.log('Fetching reservations for userId:', userId);
        const q = query(reservationsRef, where('userId', '==', userId));
        const snapshot = await getDocs(q);

        this.reservations = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as Reservation[]; // Cast the result to Reservation[]
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    },

    // Fetch all reservations (for admin)
    async fetchAllReservations() {
      const { $db } = useNuxtApp();
      try {
        const reservationsRef = collection($db, 'reservations');
        console.log('Fetching all reservations');
        const snapshot = await getDocs(reservationsRef);

        this.reservations = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as Reservation[]; // Cast the result to Reservation[]
      } catch (error) {
        console.error('Error fetching all reservations:', error);
      }
    },

    

    // Add a new reservation
    async addReservation(reservation: Reservation, db: any, userId: string, username: string) {
      console.log('addReservation() in store called with:', reservation);

      try {
        console.log('Attempting to add reservation to Firestore...');
        const docRef = await addDoc(collection(db, 'reservations'), {
          checkInDate: reservation.checkInDate,
          checkOutDate: reservation.checkOutDate,
          guests: reservation.guests,
          userId,
          username, // Include username
          status: 'pending', // Default status is 'pending'
        });

        console.log('Reservation successfully added to Firestore with ID:', docRef.id);

        this.reservations.push({
          id: docRef.id,
          ...reservation,
          userId,
          username, // Include username in local state
          status: 'pending', // Add default status to local state
        });
        console.log('Reservation successfully added with ID:', docRef.id);
      } catch (error) {
        console.error('Error adding reservation:', error);
      }
    },

    // Update the status of a reservation (approve or decline)
    async updateReservationStatus(reservationId: string, status: 'confirmed' | 'declined') {
      const { $db } = useNuxtApp();
      try {
        const reservationRef = doc($db, 'reservations', reservationId);
        await updateDoc(reservationRef, { status });

        // Update the local state
        const reservation = this.reservations.find((r) => r.id === reservationId);
        if (reservation) {
          reservation.status = status;
        }
        console.log(`Reservation ${reservationId} updated to status: ${status}`);
      } catch (error) {
        console.error('Error updating reservation status:', error);
      }
    },
  },
}); 