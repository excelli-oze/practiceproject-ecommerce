<script>
    import { onMount } from 'svelte';
    import { tick } from 'svelte';
  
    let count = 0;
    let animate = false;
  
    // Initialize the count from localStorage when the component mounts
    onMount(() => {
      const storedCount = localStorage.getItem("Quantity");
      if (storedCount !== null) {
        count = parseInt(storedCount, 10);
      }
    });
  
    function increment() {
      count++;
      localStorage.setItem("Quantity", count);
      console.log("increment");
      triggerAnimation();
    }
  
    function decrement() {
      if (count !== 0) {
        count--;
        localStorage.setItem("Quantity", count);
        console.log("decrement");
        triggerAnimation();
      }
    }
  
    function triggerAnimation() {
      animate = false; // Reset animation
      setTimeout(() => {
        animate = true; // Re-trigger animation
      }, 0);
    }
 

  let slideIndex = 1;
  let slides = [];

  onMount(() => {
    slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) {
      console.error("Slides not found");
      return;
    }
    showSlides(slideIndex);
  });

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  async function showSlides(n) {
    if (slides.length === 0) {
      return;
    }

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].classList.remove("slide-enter");
      slides[i].classList.remove("slide-exit");
    }

    for (let i = 0; i < 3; i++) {
      let slide = slides[(slideIndex + i - 1) % slides.length];
      slide.style.display = "block";
      slide.classList.add("slide-enter");
    }

    await tick(); // Wait for the DOM to update
  }

  </script>

<main>
    <div class="">
        <div class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row -mx-4">
                <div class="md:flex-1 px-4">
                    <div class="h-auto rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                        <img class="w-full h-full object-cover" src="./Images/left colum.png" alt="Product Image">
                    </div>
                </div>
                <div class="md:flex-1 px-10 py-10">

                    <p class="text-black-800 dark:text-black-300 text-sm mb-4">
                        Fresh Flower / <span class="text-gray-400">Rose Delight</span>
                    </p>
                    <h2 class="text-2xl font-light text-black-800  py-8 leading-relaxed">Rose Delight - $100</h2>
                    <p class="text-black-800 dark:text-black-300 text-m mb-4 ">
                        Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty
                        and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these
                        sublime flowers even
                    </p>

                    <div class="flex items-center py-4">
                        <p class="px-4">Quantity</p>
                        <button id="decrement" class="border border-gray-800  text-gray-800 font-bold md:py-4 md:px-8 py-2 px-4" on:click={decrement}>
                            -
                        </button>
                        <p class=" border border-gray-800 text-base font-medium md:py-4 md:px-12 py-2 px-8 w-12 md:w-28 inline">
                            <span id="count" class="inline-block" class:slide-in-top={animate}>{count}</span>
                        </p>
                        <button id="increment" class="border border-gray-800  text-gray-800 font-bold md:py-4 md:px-8 py-2 px-4" on:click={increment}>
                            +
                        </button>
                    </div>

                    <p class="px-4">Excellent Combination with:</p>


                    <!-- Slideshow container -->
                    <div class="slideshow-container py-8 flex justify-center items-center gap-2 relative">

                        <!-- Full-width slides/quotes -->
                        <div class="mySlides">
                            <img src="./Images/card itemflower-2.png" alt="" srcset="" height="150px" width="150px">
                        </div>

                        <div class="mySlides">
                            <img src="./Images/card itemflower4.png" alt="" srcset="" height="150px" width="150px">
                        </div>

                        <div class="mySlides">
                            <img src="./Images/card itemflower1.png" alt="" srcset="" height="150px" width="150px">
                        </div>

                        <div class="mySlides">
                            <img src="./Images/card itemflower3.png" alt="" srcset="" height="150px" width="150px">
                        </div>

                        <div class="mySlides">
                            <img src="./Images/card itemflower5.png" alt="" srcset="" height="150px" width="150px">
                        </div>


                        <!-- Next/prev buttons -->
                        <a class="prev absolute left-1 top-2/4" on:click={() => plusSlides(-1)}>&#10094;</a>
                        <a class="next absolute right-1 top-2/4" on:click={() => plusSlides(1)}>&#10095;</a>
                    </div>





                    <div>
                        <p class="px-4">Price Options</p>
                    </div>
                    



                    <div class="flex flex-col gap-2">
                        <div class="inline-flex items-center">
                            <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor=":html">
                                <input name="terms" type="radio"
                                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-800 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                    id="html" />
                                <span
                                    class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16"
                                        fill="currentColor">
                                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                    </svg>
                                </span>
                            </label>
                            <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="html">
                                <p class="flex font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-500">One time purchase. Price $100.</p>
                            </label>
                        </div>
                        <div class="inline-flex items-center">
                            <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="html2">
                                <input name="terms" type="radio"
                                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-800 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                    id="html2" />
                                <span
                                    class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16"
                                        fill="currentColor">
                                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                    </svg>
                                </span>
                            </label>
                            <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="html2">
                                <p class="flex font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-500">
                                    Subscribe now, and save 25% on this order. .
                                </p>
                            </label>
                        </div>
                    </div>

                    <button
                        class="align-middle  font-bold text-center uppercase  text-xs py-3 px-6  bg-gray-900 text-white w-full"
                        type="button">
                        Add To Basket
                    </button>



                </div>
            </div>
        </div>
    </div>

</main>

<style lang="postcss">

</style>