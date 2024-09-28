<script setup lang="ts">
const store = useProductStore()
const { products, getProducts } = storeToRefs(store)

const filteredProducts = computed(() => {
    // if(selectedCategory.value === 'all') {
    //     return products.value;
    // }
    console.log(products.value);
    
    return products.value
    // products.value.filter((product: any) => product.category === selectedCategory.value);
});

store.getProducts()

</script>
<template> 
      <main>
        <!-- <nav class="flex items-center min-h-[64px] gap-3 pl-10 border-b-2 border-b-[#1A1A1A1A]">
            <div class="cursor-pointer"  v-for="item in allCategories"
            @click="selectedCategory = item"
            :class="selectedCategory === item ? 'active' : ''"
            >
                <span class="capitalize">{{ item }}</span>
            </div>
        </nav> -->
        <div class="flex flex-wrap p-10 gap-2 sm:gap-2 md:gap-4 lg:gap-2">
            <ProductCard 
                v-for="product in filteredProducts"
                :key="product.id"
                :product="product"
            />
        </div>
    </main>
</template>