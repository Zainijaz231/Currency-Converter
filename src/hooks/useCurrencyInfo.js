import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        
        // Using ExchangeRate-API which is more reliable and free
        const apiKey = 'demo'; // Free tier allows limited requests
        const apiUrl = `https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`;
        
        fetch(apiUrl)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((apiData) => {
                if (apiData && apiData.rates) {
                    setData(apiData.rates);
                } else {
                    // Fallback: get all currencies and convert appropriately
                    fetch('https://api.exchangerate-api.com/v4/latest/USD')
                        .then((res) => res.json())
                        .then((fallbackData) => {
                            if (fallbackData && fallbackData.rates) {
                                setData(fallbackData.rates);
                            } else {
                                throw new Error('Unable to fetch currency data');
                            }
                            setLoading(false);
                        })
                        .catch((fallbackErr) => {
                            setError('Currency service unavailable. Please try again later.');
                            setLoading(false);
                            console.error('Fallback API Error:', fallbackErr);
                        });
                }
                if (apiData && apiData.rates) {
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.error('Currency API Error:', err.message);
                // Try fallback API
                fetch('https://api.exchangerate-api.com/v4/latest/USD')
                    .then((res) => res.json())
                    .then((fallbackData) => {
                        if (fallbackData && fallbackData.rates) {
                            setData(fallbackData.rates);
                        } else {
                            setError('Currency service temporarily unavailable');
                        }
                        setLoading(false);
                    })
                    .catch((fallbackErr) => {
                        setError('Unable to connect to currency service. Please check your internet connection.');
                        setLoading(false);
                        console.error('Fallback API Error:', fallbackErr);
                    });
            });
    }, [currency]);

    return { data, loading, error };
}

export default useCurrencyInfo;