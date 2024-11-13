'use client'
import styles from './page.module.css'
import { useRef, useState } from 'react'
import bg from '@/public/forest.jpg'

type FirstActProps = {
  setCurrentAct: (act: number) => void
}
const FirstAct: React.FC<FirstActProps> = ({ setCurrentAct }) => {
  const [open, setOpen] = useState(false)
  const [blackout, setBlackout] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const doorFunction = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
    setOpen(!open)
    setBlackout(true)
    setTimeout(() => {
      setCurrentAct(1)
    }, 1000)
  }
  return (
    <div className={blackout ? styles.disappear : ''}>
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          filter: 'blur(10px)',
          width: '100%',
          height: '100%',
          position: 'fixed',
          left: 0,
          right: 0,
          zIndex: 1,
        }}></div>
      <div className={`${styles.page} ${blackout ? styles.disappear : ''}`}>
        <div
          className={blackout ? styles.doorVanish : ''}
          style={{ cursor: 'pointer' }}
          onClick={doorFunction}>
          {open ? (
            <img src="/doors/open.png" />
          ) : (
            <img src="/doors/close.png" />
          )}
          <audio ref={audioRef} src="/doors/sounds/open.mp3" />
        </div>
      </div>
    </div>
  )
}

export default FirstAct
