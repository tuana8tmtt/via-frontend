import instance from "./intance"

export const Login = (user) => {
    const url = '/signin'
    return instance.post(url, user)
}
export const ChangePassword = (data) => {
    const url = '/change-password'
    return instance.post(url, data)
}