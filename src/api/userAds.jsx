import instance from "./intance"

export const getlistUserAds = () => {
    const url = `/user_ads`
    return instance.get(url)
}