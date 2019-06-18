const API = "http://localhost:3002/api/store/";

export const ApiService = {
    get(endpoint) {
        return fetch(`${API}${endpoint}`)
            .then(response => response.json())
    },
    post(endpoint, data) {
        return fetch(`${API}${endpoint}`, {
                method: "POST",
                body: JSON.stringify(data)
            })
            .then(response => response.json());
    },
    delete(endpoint, id) {
        return fetch(`${API}${endpoint}?id=${id}`, {
                method: "DELETE"
            })
            .then(response => response.json());
    }
}