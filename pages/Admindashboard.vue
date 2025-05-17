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
      <div
          class="flex text-[#AE7D54] text-2xl justify-center align-center gap-2"
        >
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
        <div class=" mt-20 w-7xl h-40 grid grid-cols-4 mx-auto px-6 py-9 gap-10 bg-[#d6c3ac] shadow-md">
          
            <!-- Check-In Date Input -->
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Check-In</label
              >
              <input
                type="date" disabled
                v-model="checkInDate"
                class="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
  
            <!-- Check-Out Date Input -->
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Check-Out</label
              >
              <input disabled
                type="date"
                v-model="checkOutDate"
                class="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
  
            <!-- Guests Select Dropdown -->
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Guests</label
              >
              <select disabled
                v-model="guests"
                class="mt-1 w-full p-2 border border-gray-300 rounded-md"
              >
                <option v-for="n in 10" :value="n" :key="n">
                  {{ n }}
                </option>
              </select>
            </div>
  
            <!-- Check Availability Button -->
            <button
              class="mt-4 w-full py-2 px-4 bg-[#45db31] text-white font-medium rounded-md cursor-pointer"
            >
              Approve
            </button>
          </div>
        </div>
  
  
             <!--details Container-->
             <div>
        <div class=" mt-20 w-7xl h-40 grid grid-cols-4 mx-auto px-6 py-9 gap-10 bg-[#d6c3ac] shadow-md">
          
            <!-- Check-In Date Input -->
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Check-In</label
              >
              <input
                type="date" disabled
                v-model="checkInDate"
                class="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
  
            <!-- Check-Out Date Input -->
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Check-Out</label
              >
              <input
                type="date" disabled
                v-model="checkOutDate"
                class="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
  
            <!-- Guests Select Dropdown -->
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Guests</label
              >
              <select disabled
                v-model="guests"
                class="mt-1 w-full p-2 border border-gray-300 rounded-md"
              >
                <option v-for="n in 10" :value="n" :key="n">
                  {{ n }}
                </option>
              </select>
            </div>
  
            <!-- Check Availability Button -->
            <button
              class="mt-4 w-full py-2 px-4 bg-[#db3731] text-white font-medium rounded-md cursor-pointer"
            >
              Decline
            </button>
          </div>
        </div>
  
  
  
        
    
    <Footer />
  </template>
  
  <script>
  export default {
    data() {
      return {
        guests: 2,
        checkInDate: "2025-12-31",
        checkOutDate: "2025-12-31",
      };
    },
  };
  </script>
  