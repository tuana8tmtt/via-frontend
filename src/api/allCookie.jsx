import instance from "./intance"

export const getlistCookie = (page, limit, status) => {
    const url = `/cookie`
    return instance.get(url, {
        params: { page, limit, status }
    })
}