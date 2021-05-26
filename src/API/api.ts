import axios from "axios";

export type ItemsType = {
    name: string
    id: string
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    followed: boolean
}
export type UserType = {
    items: Array<ItemsType>
    totalCount: number
    error: null | string
}
export type AuthMeType = {
    data:
        {
            id: number
            login: string
            email: string
        }
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
};

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b98ff143-f3cc-4631-896c-6546eef7309a"
    }
});

export const usersAPI = {
    getUsers(page = 1, count = 10) {
        return instance.get<UserType>(`users?page=${page}&count=${count}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId: string) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`, {})
    },
    getProfile(userId: string) {
        return instance.get('profile/' + userId)
    }
}
export const authAPI = {
    me() {
        return instance.get<AuthMeType>('auth/me')
    }
}