import { defineStore } from 'pinia';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

// Define the Reservation interface
interface Reservation {
  id?: string; // Optional id field for the reservation
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  userId: string;  
}

export const useReservationsStore = defineStore('reservations', {
  state: () => ({
    reservations: [] as Reservation[], // Explicitly type the reservations array
  }),
  actions: {
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

    async addReservation(reservation: Reservation, db: any, userId: string) {
      console.log('addReservation() in store called with:', reservation);

      try {
        const docRef = await addDoc(collection(db, 'reservations'), {
          checkInDate: reservation.checkInDate,
          checkOutDate: reservation.checkOutDate,
          guests: reservation.guests,
          userId,
        });

        this.reservations.push({
          id: docRef.id,
          ...reservation,
          userId,
        });
        console.log('Reservation successfully added with ID:', docRef.id);
      } catch (error) {
        console.error('Error adding reservation:', error);
      }
    },
  },
});