import {
    ApiService
} from "./ApiService";

const ENDPOINT = "products";

export const ProductService = {
    list() {
        ApiService.get(ENDPOINT);
    },
    create(newProduct) {
        ApiService.post(ENDPOINT, newProduct);
    },
    remove(productId) {
        ApiService.delete(ENDPOINT, productId);
    }
}