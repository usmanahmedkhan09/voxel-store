<script setup lang="ts">
const props = defineProps(["product"])

const prodcut = ref({...props.product})


</script>
<template>
    <div class="p-4 border-1 rounded overflow-hidden shadow-lg bg-white flex-grow-1 basis-1/2 sm:basis-1/3 md:basis-[20%] lg:basis-[16%] flex flex-col justify-between gap-3">
        <div class="w-full h-48">
            <img class="w-full h-full object-contain" :src="product.image" alt="">
        </div>
        <div>
            <p class="font-bold line-clamp-2">{{ product.title }}</p>
            <span class="block text-gray-500">${{ product.price }}</span>
        </div>
        <button class="bg-[#F4F4F4] rounded-lg p-2 font-bold"> + Add To Cart</button>
    </div>
</template>