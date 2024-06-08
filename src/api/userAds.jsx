import instance from "./intance"

export const getlistUserAds = async (page, limit, account_status, nguong) => {
    const url = `/user_ads`
    return instance.get(url, {
        params: { page, limit, account_status, nguong }
    })
}
export const getlistUserAds_Nguong = async (page, limit, nguong) => {
    const url = `/user_ads`
    return instance.get(url, {
        params: { page, limit, nguong }
    })
}