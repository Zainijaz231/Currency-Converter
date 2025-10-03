import React, { useId } from 'react'

// Currency metadata with flags and names
const CURRENCY_MAP = {
    usd: { flag: '🇺🇸', name: 'US Dollar', symbol: '$' },
    eur: { flag: '🇪🇺', name: 'Euro', symbol: '€' },
    gbp: { flag: '🇬🇧', name: 'British Pound', symbol: '£' },
    jpy: { flag: '🇯🇵', name: 'Japanese Yen', symbol: '¥' },
    aud: { flag: '🇦🇺', name: 'Australian Dollar', symbol: 'A$' },
    cad: { flag: '🇨🇦', name: 'Canadian Dollar', symbol: 'C$' },
    chf: { flag: '🇨🇭', name: 'Swiss Franc', symbol: 'CHF' },
    cny: { flag: '🇨🇳', name: 'Chinese Yuan', symbol: '¥' },
    inr: { flag: '🇮🇳', name: 'Indian Rupee', symbol: '₹' },
    krw: { flag: '🇰🇷', name: 'South Korean Won', symbol: '₩' },
    brl: { flag: '🇧🇷', name: 'Brazilian Real', symbol: 'R$' },
    rub: { flag: '🇷🇺', name: 'Russian Ruble', symbol: '₽' },
    mxn: { flag: '🇲🇽', name: 'Mexican Peso', symbol: '$' },
    sgd: { flag: '🇸🇬', name: 'Singapore Dollar', symbol: 'S$' },
    sek: { flag: '🇸🇪', name: 'Swedish Krona', symbol: 'kr' },
    nok: { flag: '🇳🇴', name: 'Norwegian Krone', symbol: 'kr' },
    zar: { flag: '🇿🇦', name: 'South African Rand', symbol: 'R' },
    aed: { flag: '🇦🇪', name: 'UAE Dirham', symbol: 'د.إ' },
    try: { flag: '🇹🇷', name: 'Turkish Lira', symbol: '₺' },
    czk: { flag: '🇨🇿', name: 'Czech Koruna', symbol: 'Kč' },
};

export const Input = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) => {
    const amountInputId = useId();

    const formatNumber = (value) => {
        if (value === '' || value === 0) return '';
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(value);
    };

    const handleAmountChange = (e) => {
        const value = e.target.value.replace(/[^0-9.]/g, ''); // Only allow numbers and decimal
        onAmountChange && onAmountChange(parseFloat(value) || 0);
    };

    return (
        <div className={`input-box ${className}`}>
            <div className="input-section">
                <label htmlFor={amountInputId} className="input-label">
                    {label}
                    <span className="currency-display">
                        {CURRENCY_MAP[selectCurrency]?.flag} {selectCurrency.toUpperCase()}
                    </span>
                </label>
                <div className="input-container">
                    <span className="currency-symbol">
                        {CURRENCY_MAP[selectCurrency]?.symbol || '$'}
                    </span>
                    <input
                        id={amountInputId}
                        className="amount-input"
                        type="text"
                        placeholder="0.00"
                        disabled={amountDisable}
                        value={formatNumber(amount)}
                        onChange={handleAmountChange}
                    />
                </div>
            </div>
            <div className="currency-section">
                <p className="currency-label">Currency Type</p>
                <div className="currency-select-container">
                    <select
                        className="currency-select"
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {CURRENCY_MAP[currency]?.flag} {CURRENCY_MAP[currency]?.name || currency.toUpperCase()}
                            </option>
                        ))}
                    </select>
                    <div className="select-icon">▼</div>
                </div>
            </div>
        </div>
    );
};
