import { useState, useEffect } from 'react'
import { obterHoraAtual, obterDataAtual } from './utils/tempo'

import './App.css'

function App() {

  const [hora, setHora] = useState(obterHoraAtual())
  const [data, setData] = useState(obterDataAtual())
 
  useEffect(() => {
    setData(obterDataAtual())
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(obterHoraAtual())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <p className='hora-atual'>Hora atual: {hora}</p>
      <p className='data-atual'>Data atual: {data}</p>
    </>
  )
}

export default App
