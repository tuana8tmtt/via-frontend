import React, { useState, useEffect } from 'react';
import { convertToUSD } from '../../utils/currencyConverter';

const ConvertUSD = ({ amount, currency }) => {
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchConvertedValue = async () => {
            try {
                const result = await convertToUSD(amount, currency);
                setConvertedAmount(result);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchConvertedValue();
    }, [amount, currency]);

    if (error) {
        return <span style={{ color: 'red' }}>Lỗi: {error}</span>;
    }

    return convertedAmount !== null ? (
        <span >{convertedAmount.toFixed(2)} USD</span>
    ) : (
        <span>Loading...</span>
    );
};

export default ConvertUSD;
