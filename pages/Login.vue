
<template> 
    <section class=" ">

    
   <div class=" mt-[10%] border bg-[#F8F4EF] rounded-[10px] w-2/4  mx-auto text-sm font-medium flex items-center">
    <div class="bg-[url('public/bg.jpg')] w-[50%] h-130 rounded-l-[10px]" >
        <img class="p-3" src="public/logo.png" alt="">
    </div>

    <div class="grid items-center justify-center  gap-4 p-10">
    <div class=" w-full ">
      <h1 class="text-2xl">Register with email</h1>
    </div>
    <form class="grid mx-auto ">
      <label for="email">Enter your email:</label>
      <input class="border h-10 w-80 rounded-xl"  type="email" id="email" name="email">

      <label class="mt-2" for="password">Password:</label>
      <input class="border h-10 rounded-xl"  type="password" id="password" name="password">

      <input class="border mt-6 hover:bg-[#55432c] cursor-pointer rounded-lg w-4/5 mx-auto p-2" type="submit" value="Login">
    </form>
</div>
  </div>
</section>
</template>