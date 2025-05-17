<template>
  <!-- Whole upper section with background image -->
  <section class="bg-[#F8F4EF]">
    <section
      class="bg-[url('public/bg.jpg')] bg-cover bg-center h-screen w-full"
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

          <button
            class="text-white bg-[#d1964e] hover:bg-[#866a47] mt-5 pl-8 py-3 w-40 rounded-full hover:cursor-pointer flex justify-self-center"
          >
            Book now
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Second section 'What we offer' -->
    <section>
      <div
        class="flex mt-15 text-[#AE7D54] text-2xl justify-center align-center gap-2"
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
        <p class="font-sans">What we offer</p>
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

      <div class="mt-5 max-w-xl mx-auto text-wrap">
        <h1 class="playfair text-6xl text-center">
          Book your stay and relax in luxury
        </h1>
      </div>

      <!--Details card -->
      <div class="max-w-5xl mx-auto grid grid-cols-3 gap-4 mt-10 mb-20">
        <!-- Card 1 -->

        <div class="rounded-lg overflow-hidden shadow-lg bg-white">
          <!-- Image at the top -->
          <img src="public/room-1.jpg" alt="" />

          <!-- Content section -->
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Junior Suite</h2>
            <p class="text-xl font-semibold text-[#AE7D54] mb-4">$150/ Night</p>

            <div class="grid grid-cols-2 gap-4">
              <!-- Persons -->
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 text-gray-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                <span class="text-gray-600">1-2 Persons</span>
              </div>

              <!-- Bed -->
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 text-gray-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 20v-8a2 2 0 012-2h14a2 2 0 012 2v8M3 20h18M3 20l-1-4M21 20l-1-4M6 9V6a2 2 0 012-2h8a2 2 0 012 2v3"
                  ></path>
                </svg>
                <span class="text-gray-600">King Size Bed</span>
              </div>

              <!-- Bathtub -->
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 text-gray-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <span class="text-gray-600">Bathtub</span>
              </div>

              <!-- Wifi -->
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 text-gray-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  ></path>
                </svg>
                <span class="text-gray-600">Free Wifi</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2 -->

        <div class="rounded-lg overflow-hidden shadow-lg bg-white">
          <!-- Image at the top -->
          <img src="public/room-2.jpg" alt="" />

          <!-- Content section -->
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Family Suite</h2>
            <p class="text-xl font-semibold text-[#AE7D54] mb-4">$250/ Night</p>

            <div class="grid grid-cols-2 gap-4">
              <!-- Persons -->
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 text-gray-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                <span class="text-gray-600">1-2 Persons</span>
              </div>

              <!-- Bed -->
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 text-gray-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 20v-8a2 2 0 012-2h14a2 2 0 012 2v8M3 20h18M3 20l-1-4M21 20l-1-4M6 9V6a2 2 0 012-2h8a2 2 0 012 2v3"
                  ></path>
                </svg>
                <span class="text-gray-600">King Size Bed</span>
              </div>

              <!-- Bathtub -->
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 text-gray-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <span class="text-gray-600">Bathtub</span>
              </div>

              <!-- Wifi -->
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 text-gray-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  ></path>
                </svg>
                <span class="text-gray-600">Free Wifi</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3 -->

        <div class="rounded-lg overflow-hidden shadow-lg bg-white">
          <!-- Image at the top -->
          <img src="public/room-3.jpg" alt="" />

          <!-- Content section -->
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Bussiness Suite</h2>
            <p class="text-xl font-semibold text-[#AE7D54] mb-4">$500/ Night</p>

            <div class="grid grid-cols-2 gap-4">
              <!-- Persons -->
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 text-gray-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                <span class="text-gray-600">1-2 Persons</span>
              </div>

              <!-- Bed -->
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 text-gray-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 20v-8a2 2 0 012-2h14a2 2 0 012 2v8M3 20h18M3 20l-1-4M21 20l-1-4M6 9V6a2 2 0 012-2h8a2 2 0 012 2v3"
                  ></path>
                </svg>
                <span class="text-gray-600">King Size Bed</span>
              </div>

              <!-- Bathtub -->
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 text-gray-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <span class="text-gray-600">Bathtub</span>
              </div>

              <!-- Wifi -->
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 text-gray-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  ></path>
                </svg>
                <span class="text-gray-600">Free Wifi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </section>
</template>

<script></script>
