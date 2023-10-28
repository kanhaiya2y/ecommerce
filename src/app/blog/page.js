import React from 'react'

const page = () => {
  return (
    <section class="">
  <div class="mx-auto max-w-md sm:max-w-lg md:max-w-screen-xl">
    <div class="px-4 py-8 md:px-6 md:py-12 lg:px-20">
      <h1 class="text-center text-3xl font-semibold text-gray-800 lg:text-4xl">Our Best Selling Collection</h1>

      <div class="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3 lg:gap-8">
        
        <article class="bg-slate-50 p-8">
          <div class="">
            <h2 class="text-xl text-gray-600">Mens' Scotch</h2>
            <p class="mt-2 text-xl font-semibold text-gray-800"></p>
          </div>
          <div class="mt-8 flex items-center justify-center md:mt-24">
            <img class="" src="jacket-1.jpg" alt="" />
          </div>
        </article>
        
        <article class="bg-slate-50 p-8">
          <div class="">
            <h2 class="text-xl text-gray-600">Mens' Red</h2>
            <p class="mt-2 text-xl font-semibold text-gray-800"></p>
          </div>
          <div class="mt-8 flex items-center justify-center md:mt-24">
            <img class="" src="jacket-1.jpg" alt="" />
          </div>
        </article>
        
        <article class="bg-slate-50 p-8">
          <div class="">
            <h2 class="text-xl text-gray-600">Mens' Punk</h2>
            <p class="mt-2 text-xl font-semibold text-gray-800"></p>
          </div>
          <div class="mt-8 flex items-center justify-center md:mt-24">
            <img src="cta-banner.jpg" alt="" />
          </div>
        </article>
      </div>

      <div class="mt-4 grid grid-cols-1 gap-5 md:mt-6 md:grid-cols-2 md:gap-6 lg:mt-8 lg:gap-8">
        
        <article class="bg-slate-50 p-8">
          <div>
            <h2 class="text-xl text-gray-600">Mens' Black</h2>
            <p class="mt-2 text-xl font-semibold text-gray-800"></p>
          </div>
          <div class="mt-28 flex items-center justify-center md:mt-3">
            <img src="cta-banner.jpg" alt="" />
          </div>
        </article>
        
        <article class="bg-slate-50 p-8">
          <div>
            <h2 class="text-xl text-gray-600">Womens' Brown</h2>
            <p class="mt-2 text-xl font-semibold text-gray-800"></p>
          </div>
          <div class="mt-28 flex items-center justify-center md:mt-1">
            <img src="cta-banner.jpg" alt="" />
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

  )
}

export default page