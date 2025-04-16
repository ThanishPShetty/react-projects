import React,{useId} from 'react'

function InputBox({label,amount,onAmountChange,onCurrencyChange,currencyOption=[],selectCurrency="inr",amountDisable=false}) {
  const amountInputId=useId()
  return (
    <div className="w-306 p-6 bg-white shadow-lg rounded-2xl relative flex flex-col justify-end h-40 mt-10">
    <div className='absolute top-7 left-4'>
      <label htmlFor={amountInputId}>{label}</label>
    </div>
    <div className="absolute bottom-4 left-4">
      <input
        id={amountInputId}
        type="number"
        placeholder="Amount"
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={amountDisable}
        value={amount}
        onChange={(e)=>onAmountChange && onAmountChange(e.target.value)}
      />
    </div>
    <div className='absolute top-7 right-4'>
      <label >Currency Type</label>
    </div>
    <div className="absolute bottom-4 right-4">
      <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-50"
      value={selectCurrency}
      onChange={(e)=>(
        onCurrencyChange && onCurrencyChange(e.target.value)
      )}>
        
        {currencyOption.map((c)=>(
          <option key={c} value={c}>{c}</option>
        ))}
       
      </select>
    </div>
  </div>
  )
}

export default InputBox