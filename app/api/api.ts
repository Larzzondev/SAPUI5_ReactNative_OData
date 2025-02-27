import axios from 'axios';

const API_URL = 'https://my-mock-odata-api.com/products';

export type Product = {
    id: number;
    name: string;
    description: string;
};

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(API_URL);
        console.log("API Response: ", response.data);  // Debugging line
        return response.data as Product[];
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error('Error fetching products');
    }
};
