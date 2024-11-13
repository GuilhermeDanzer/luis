'use client'
import { useState } from 'react'
import FirstAct from './components/firstAct'

export default function Home() {
  const [currentAct, setCurrentAct] = useState(0)
  const acts = [<FirstAct key="firstAct" setCurrentAct={setCurrentAct} />]
  return <div>{acts[currentAct]}</div>
}
