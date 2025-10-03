import { useState, useEffect } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import { Input } from './components/Input.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import './App.css'

function App() {
  
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertAmount] = useState(0)

  const { data: CurrencyInfo, loading, error } = useCurrencyInfo(from)
  
  // Get popular currencies in a nice order
  const POPULAR_CURRENCIES = ['usd', 'eur', 'gbp', 'jpy', 'aud', 'cad', 'chf', 'cny', 'inr']
  const options = CurrencyInfo && Object.keys(CurrencyInfo).length > 0 
    ? [...POPULAR_CURRENCIES, ...Object.keys(CurrencyInfo).filter(curr => !POPULAR_CURRENCIES.includes(curr))]
    .filter(Boolean) : POPULAR_CURRENCIES

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    if (CurrencyInfo && CurrencyInfo[to.toUpperCase()]) {
      setConvertAmount(amount * CurrencyInfo[to.toUpperCase()])
    }
  }

  // Auto-convert when amount or currencies change
  useEffect(() => {
    if (amount > 0 && CurrencyInfo && CurrencyInfo[to.toUpperCase()] && !loading) {
      setConvertAmount(amount * CurrencyInfo[to.toUpperCase()])
    }
  }, [amount, to, CurrencyInfo, loading])

  // Reset converted amount when switching currencies
  useEffect(() => {
    if (CurrencyInfo && CurrencyInfo[to.toUpperCase()] && amount > 0) {
      setConvertAmount(amount * CurrencyInfo[to.toUpperCase()])
    }
  }, [from, CurrencyInfo, amount])

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="spinner"></div>
          <h2>Loading currency rates...</h2>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">
          <h2>Error loading currency rates</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <div className="header">
            <h1 className="title">💱 Currency Converter</h1>
            <p className="subtitle">Get real-time exchange rates</p>
          </div>
          <ThemeToggle />
        </div>
        
        <div className="inputs-container">
          <Input
            label="From"
            amount={amount}
            onAmountChange={setAmount}
            onCurrencyChange={setFrom}
            currencyOptions={options}
            selectCurrency={from.toLowerCase()}
          />
          
          <button 
            className="swap-btn" 
            onClick={swap}
            type="button"
            title="Swap currencies"
          >
            <span className="swap-icon">🔄</span>
            Swap
          </button>
          
          <Input
            label="To"
            amount={convertedAmount}
            onAmountChange={setConvertAmount}
            onCurrencyChange={setTo}
            currencyOptions={options}
            selectCurrency={to.toLowerCase()}
            amountDisable
          />
        </div>
        
        {!loading && !error && CurrencyInfo && (
          <div className="conversion-summary">
            <div className="rate-display">
              <h3>Exchange Rate</h3>
              <p className="rate-value">
                1 <span className="currency-code">{from.toUpperCase()}</span> = 
                <span className="converted-rate">
                  {CurrencyInfo[to.toUpperCase()]?.toFixed(4) || 'N/A'}
                </span> 
                <span className="currency-code">{to.toUpperCase()}</span>
              </p>
            </div>
            
            <div className="conversion-result">
              <h3>Converted Amount</h3>
              <p className="result-value">
                <span className="original-amount">{new Intl.NumberFormat().format(amount)}</span> {from.toUpperCase()} = 
                <span className="converted-amount">{new Intl.NumberFormat().format(convertedAmount)}</span> {to.toUpperCase()}
              </p>
            </div>
          </div>
        )}
        
        <div className="popular-currencies">
          <h4>Popular Currencies</h4>
          <div className="currency-grid">
            {POPULAR_CURRENCIES.slice(0, 8).map((curr) => (
              <button
                key={curr}
                className={`currency-chip ${from === curr || to === curr ? 'active' : ''}`}
                onClick={() => {
                  if (curr !== from && curr !== to) {
                    if (Math.random() < 0.5) setFrom(curr)
                    else setTo(curr)
                  }
                }}
              >
                <span className="flag">{
                  {
                    usd: '🇺🇸', eur: '🇪🇺', gbp: '🇬🇧', jpy: '🇯🇵',
                    aud: '🇦🇺', cad: '🇨🇦', chf: '🇨🇭', cny: '🇨🇳'
                  }[curr] || '🏳️'
                }</span>
                {curr.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function AppWrapper() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default AppWrapper
