import instance from "./intance"

export const getlistCookie = () => {
    const url = `/cookie`
    return instance.get(url)
}