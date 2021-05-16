import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b98ff143-f3cc-4631-896c-6546eef7309a"
    }
});

export const usersAPI = {
    getUsers(page = 1, count = 10) {
        return instance.get(`users?page=${page}&count=${count}`)
            .then(response => {
                return response.data
            });
    }
}
