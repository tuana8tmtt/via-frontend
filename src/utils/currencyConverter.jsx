export const fetchExchangeRates = async () => {
    const response = await fetch("https://cdn.jsdelivr.net/gh/ismartcoding/currency-api@main/latest/data.json");
    if (!response.ok) {
        throw new Error('Lỗi khi lấy thông tin tỉ giá');
    }
    const data = await response.json();
    return data;
};

export const convertToUSD = async (amount, currencyCode) => {
    try {
        const exchangeRates = await fetchExchangeRates();
        // console.log(exchangeRates.quotes['VND']);
        if (exchangeRates.quotes[currencyCode]) {
            const rateToUSD = exchangeRates.quotes[currencyCode];
            const amountInUSD = amount / rateToUSD;
            return amountInUSD;
        } else {
            throw new Error(`Currency code ${currencyCode} không tồn tại.`);
        }
    } catch (error) {
        throw new Error(`Lỗi khi chuyển đổi: ${error.message}`);
    }
};
