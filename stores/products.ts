import { defineStore } from 'pinia';
import { Product } from '~/Models/product.model';
export const useProductStore = defineStore('product', () =>
{
    const products = ref<Product[]>([])

    async function getProducts(): Promise<void>
    {
        try
        {
            const { data } = await useFetch<Product[]>('https://fakestoreapi.com/products');

            if (data && data.value && data.value.length > 0)
            {
                products.value = data.value;
            }
        } catch (err)
        {
            console.error('Failed to fetch products:', err);
        }
    }
    return { products, getProducts }
})