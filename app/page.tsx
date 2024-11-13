'use client'
import { useState } from 'react'
import FirstAct from './components/firstAct'

export default function Home() {
  const [currentAct, setCurrentAct] = useState(0)
  const acts = [<FirstAct setCurrentAct={setCurrentAct} />]
  return <>{acts[currentAct]}</>
}
