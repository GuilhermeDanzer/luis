'use client'
import { useState } from 'react'
import FirstAct from './components/firstAct'

export default function Home() {
  const [open, setOpen] = useState(false)
  const [blackout, setBlackout] = useState(false)
  const [currentAct, setCurrentAct] = useState(0)
  const acts = [<FirstAct setCurrentAct={setCurrentAct} />]
  return <>{acts[currentAct]}</>
}
