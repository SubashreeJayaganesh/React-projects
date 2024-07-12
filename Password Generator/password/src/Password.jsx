import React, { useState } from 'react'

const Password = () => {
    const [length,setLength]=useState(8);
    const [uppercase,setUppercase]=useState(true);
    const [lowercase,setLowercase]=useState(true);
    const [number,setNumber]=useState(true);
    const [symbol,setSymbol]=useState(true);
    const [password,setPassword]=useState("")

const generatePassword=()=>{
    let charset="";
    if(uppercase) charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(lowercase) charset+="abcdefghijklmnopqrstuvwxyz";
    if(number) charset+="0123456789";
    if(symbol) charset+="!@#$%^&*()-_=+";
    let generatePassword ="";
    for(let i=0;i<length;i++){
        const randomIndex =Math.floor(Math.random()* charset.length);
        generatePassword+=charset[randomIndex];
    }
    setPassword(generatePassword);
}
const copyText=()=>{
    navigator.clipboard.writeText(password);
    alert("password Copied")
}

  return (
    <div className='password'>
      <h2>Strong Password Generator</h2>
    <div className='input-group'>
        <label htmlFor='num'>password length :</label>
        <input type='number' id='num' value={length} onChange={(e)=>setLength(parseInt(e.target.value))} />
    </div>
    <div className='checkbox-grp'>
        <input type='checkbox' id='upper' checked={uppercase} onChange={(e)=>setUppercase(e.target.checked)}/>
        <label htmlFor='upper'>Include Uppercase</label>
    </div>
    <div className='checkbox-grp'>
        <input type='checkbox' id='lower' checked={lowercase} onChange={(e)=>setLowercase(e.target.checked)}/>
        <label htmlFor='lower'>Include Lowercase</label>
    </div>
    <div className='checkbox-grp'>
        <input type='checkbox' id='numbers' checked={number} onChange={(e)=>setNumber(e.target.checked)}/>
        <label htmlFor='numbers'>Include Numbers</label>
    </div>
    <div className='checkbox-grp'>
        <input type='checkbox' id='symbol' checked={symbol} onChange={(e)=>setSymbol(e.target.checked)}/>
        <label htmlFor='symbol'>Include Symbols</label>
    </div>
    <button className='generate-btn' onClick={generatePassword}>Generate password</button>
    <div className='generatePassword'>
        <input type='text' readOnly value={password} />
        <button className='copy-btn' onClick={copyText}>Copy </button>
    </div>
    </div>
  )
}

export default Password
