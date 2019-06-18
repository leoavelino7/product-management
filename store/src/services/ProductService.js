import {
    ApiService
} from "./ApiService";

const ENDPOINT = "products";

export const ProductService = {
    list() {
        return ApiService.get(ENDPOINT);
    },
    create(newProduct) {
        return ApiService.post(ENDPOINT, newProduct);
    },
    remove(productId) {
        return ApiService.delete(ENDPOINT, productId);
    }
}