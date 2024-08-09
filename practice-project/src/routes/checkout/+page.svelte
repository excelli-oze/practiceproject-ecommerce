<script>
	import { onMount } from "svelte";

    onMount(() => {
        document.getElementById("quantity").innerHTML = localStorage.getItem("Quantity")
        document.getElementById("subtotal").innerHTML = `$ ${localStorage.getItem("Quantity") * 100}`
        document.getElementById("total").innerHTML = `$ ${localStorage.getItem("Quantity") * 100}`
    })
</script>

<div class="bg-white-100 lg:flex block items-center justify-center lg:py-4">
<div class="bg-gray-100 py-6 px-16 border border-black">
        <!-- Product Details -->
        <p class="py-8">Order Summery</p>
        <div class="md:flex items-center mb-6">

            <img src="./Images/card itemflower-2.png" alt="Snowfall"
                class="w-32 h-32 object-cover border border-black">
            <div class="md:px-4 py-8">
                <p class="">Snowfall</p>
                <p>Quantity <span id="quantity">1</span></p>
            </div>
            <div class="ml-auto text-lg font-semibold">$100</div>
        </div>
        <!-- Gift Card Section -->
        <div class="mb-6 border-t border-gray-300">
            <p class="">If you have our gift card, enter the code to get discounts</p>
            <div class="md:flex mt-2 py-4 gap-4">
                <input type="text" placeholder="Gift card" class="border mb-6 p-2 flex-grow md:w-1/2 w-full h-10">
                <button class="bg-black text-white px-4 py-2 md:w-1/2 w-full h-10">APPLY</button>
            </div>
        </div>
        <!-- Price Breakdown -->
        <div class="border-t border-gray-300 pt-4">
            <div class="flex justify-between mb-2">
                <span>Subtotal</span>
                <span id="subtotal">$100.00</span>
            </div>
            <div class="flex justify-between mb-2 ">
                <span>Shipping</span>
                <span>Calculated at next step</span>
            </div>
            <div class="flex justify-between font-semibold text-lg mt-4 border-t border-gray-300">
                <span>Total</span>
                <span id="total">$100.00</span>
            </div>
        </div>
        <!-- Secure Checkout -->
        <div class="text-center mt-6">
            <p class="text-sm text-gray-500">Secure Checkout <i class="fa-solid fa-lock"></i></p>
        </div>
    </div>

</div>