import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Buffer } from 'buffer'
globalThis.Buffer = Buffer
import './App.css'

function App() {
  const [wallet, setWallet] = useState("")

  return (
    <>
      <h1>Proof of Personhood</h1>
      <div className="card">
          <div className="flex justify-center pt-5">
              {wallet ? (
                  <p className="text-center p-3 bg-primary-500 text-white bg-opacity-50 border-[#000] border backdrop-blur mx-auto rounded-lg">
                      {`${wallet.substr(0, 5)}...${wallet.substr(
                          wallet.length - 5,
                          wallet.length
                      )}`}
                  </p>
              ) : (
                  <button>Connect your Keplr Wallet</button>
              )}
        </div>
      </div>
    </>
  )
}

export default App
