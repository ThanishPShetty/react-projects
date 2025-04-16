import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyinfo from './hooks/useCurrencyinfo'
import Swap from './components/swap'

function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const [to, setTo]=useState("inr")
  const [convertAmount,setconvertedAmount]=useState(0)

  const currencyInfo=useCurrencyinfo(from)
  const options=Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    // setconvertedAmount(amount)
    // setAmount(convertAmount)
  }

  const convert=()=>{
     setconvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
     <h1 className='text-3xl bg-orange-500'>Currency app</h1>
     <InputBox 
     label="From"
     amount={amount}
     onAmountChange={(amount)=>setAmount(amount)}
     currencyOption={options}
     onCurrencyChange={(currency)=>setFrom(currency)} 
     selectCurrency={from}
     amountDisable={false}
     />

     <Swap swap={swap}/>

     <InputBox
     label="To"
     amount={convertAmount}
     onAmountChange={(amount)=>setAmount(amount)}
     currencyOption={options}
     onCurrencyChange={(currency)=>setTo(currency)} 
     selectCurrency={to}
     amountDisable={true}
     />

     <div>
     <button className='w-306 h-10 bg-blue-400  text-white rounded-xl hover:bg-blue-700 transition duration-300' onClick={convert}>Convert  {from.toUpperCase()} to {to.toUpperCase()}</button>
     </div>
    </>
  )
}

export default App


