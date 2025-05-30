<template>
  <section
    class="bg-[url('public/bg.jpg')] bg-cover bg-center h-screen w-full mb-40 relative"
  >
    <!--Importing header from components -->
    <Header />

    <!-- Star icons and heading -->
    <div class="max-w-5xl mx-auto py-60 grid">
      <div class="flex gap-2 justify-center">
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1L12.2451 7.90983H19.5106L13.6327 12.1803L15.8779 19.0902L10 14.8197L4.12215 19.0902L6.36729 12.1803L0.489435 7.90983H7.75486L10 1Z"
            fill="#B48761"
          />
        </svg>
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1L12.2451 7.90983H19.5106L13.6327 12.1803L15.8779 19.0902L10 14.8197L4.12215 19.0902L6.36729 12.1803L0.489435 7.90983H7.75486L10 1Z"
            fill="#B48761"
          />
        </svg>
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1L12.2451 7.90983H19.5106L13.6327 12.1803L15.8779 19.0902L10 14.8197L4.12215 19.0902L6.36729 12.1803L0.489435 7.90983H7.75486L10 1Z"
            fill="#B48761"
          />
        </svg>
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1L12.2451 7.90983H19.5106L13.6327 12.1803L15.8779 19.0902L10 14.8197L4.12215 19.0902L6.36729 12.1803L0.489435 7.90983H7.75486L10 1Z"
            fill="#B48761"
          />
        </svg>
        <svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1L12.2451 7.90983H19.5106L13.6327 12.1803L15.8779 19.0902L10 14.8197L4.12215 19.0902L6.36729 12.1803L0.489435 7.90983H7.75486L10 1Z"
            fill="#B48761"
          />
        </svg>
      </div>

      <div class="text-center">
        <h1 class="text-9xl text-white font-medium playfair">
          Book your dream vacation with us
        </h1>
      </div>
    </div>
  </section>

  <!--  bookings-->
  <div class="flex text-[#AE7D54] text-2xl justify-center align-center gap-2">
    <svg
      width="30"
      height="30"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1L12.2451 7.90983H19.5106L13.6327 12.1803L15.8779 19.0902L10 14.8197L4.12215 19.0902L6.36729 12.1803L0.489435 7.90983H7.75486L10 1Z"
        fill="#B48761"
      />
    </svg>
    <p class="font-sans">Bookings</p>
    <svg
      width="30"
      height="30"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1L12.2451 7.90983H19.5106L13.6327 12.1803L15.8779 19.0902L10 14.8197L4.12215 19.0902L6.36729 12.1803L0.489435 7.90983H7.75486L10 1Z"
        fill="#B48761"
      />
    </svg>
  </div>

  <!--details Container-->
  <div>
    <div
      v-for="reservation in reservationsStore.reservations"
      :key="reservation.id"
      class="mt-20 w-[70%] h-40 grid grid-cols-4 mx-auto px-6 py-9 gap-10 bg-[#d6c3ac] shadow-md"
    >
      <div>
        <p>
          Reservation by {{ reservation.userId }} ,
          <span v-if="reservation.userName">, {{ reservation.userName }}</span>
        </p>
      </div>

      <!-- Check-In Date Input -->
      <div>
        <div class="block">
          <h1 class="text-sm font-medium text-gray-700">Check-In</h1>
          <p class="mt-1 w-full p-2 border border-gray-300 rounded-md">
            {{ reservation.checkInDate }}
          </p>
        </div>
      </div>

      <!-- Check-Out Date Input -->
      <div>
        <div class="block">
          <h1 class="text-sm font-medium text-gray-700">Check-out</h1>
          <p class="mt-1 w-full p-2 border border-gray-300 rounded-md">
            {{ reservation.checkOutDate }}
          </p>
        </div>
      </div>

      <!-- Guests Select Dropdown -->
      <div>
        <div class="block">
          <h1 class="text-sm font-medium text-gray-700">Check-In</h1>
          <p class="mt-1 w-full p-2 border border-gray-300 rounded-md">
            {{ reservation.guests }}
          </p>
        </div>
      </div>

      <!-- Check Availability Button -->
      <div class="flex">
        <button
          @click="approveReservation(reservation.id)"
          class="mt-4 w-1/2 py-2 px-4 bg-[#45db31] text-white font-medium rounded-md"
        >
          Approve
        </button>

        <button
          @click="declineReservation(reservation.id)"
          class="mt-4 w-1/2 py-2 px-4 bg-[#d61b1b] text-white font-medium rounded-md"
        >
          Decline
        </button>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useReservationsStore } from '../stores/Reservations';
import { useUserStore } from '../stores/User';
const { $db } = useNuxtApp();

const reservationsStore = useReservationsStore();
const userStore = useUserStore();

// Fetch all reservations when the admin dashboard is mounted
onMounted(async () => {
  if (userStore.isAdmin) {
    console.log('Admin logged in. Fetching all reservations...');
    await reservationsStore.fetchAllReservations();
  } else {
    console.error('Access denied. Admins only.');
    // Redirect to a different page or show an error message
  }
});

// Approve a reservation
const approveReservation = async (reservationId: string) => {
  try {
    await reservationsStore.updateReservationStatus(reservationId, 'confirmed');
    console.log(`Reservation ${reservationId} approved.`);
  } catch (error) {
    console.error(`Error approving reservation ${reservationId}:`, error);
  }
};

// Decline a reservation
const declineReservation = async (reservationId: string) => {
  try {
    await reservationsStore.updateReservationStatus(reservationId, 'declined');
    console.log(`Reservation ${reservationId} declined.`);
  } catch (error) {
    console.error(`Error declining reservation ${reservationId}:`, error);
  }
};
</script>