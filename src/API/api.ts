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
export type GetProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        github: string
        instagram: string
        mainLink: null
        twitter: string
        vk: string
        website: null
        youtube: null
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        large: string
        small: string
    }
    userId: string
}
export type UsualResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

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
        return instance.post<UsualResponseType>(`follow/${userId}`)
    },
    unfollow(userId: string) {
        return instance.delete<UsualResponseType>(`follow/${userId}`, {})
    },
    getProfile(userId: string) {
        console.warn("It's old way. Change your API")
        return profileAPI.getUserProfile(userId);
    }
}

export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get('profile/' + userId)
    },
    getUserStatus(userId: string) {
        return instance.get<string>('profile/status/' + userId)
    },
    updateUserStatus(status: string) {
        return instance.put<UsualResponseType>('profile/status', {status})
    }
}
export const authAPI = {
    me() {
        return instance.get<AuthMeType>('auth/me')
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<UsualResponseType<{userId: number}>>('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete<UsualResponseType>('auth/login')
    }
}