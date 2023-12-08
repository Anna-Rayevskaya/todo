import { useEffect, useState } from 'react'

function Timer({ timer }) {
  const [timerState, setTimer] = useState(timer)
  const [isTimerStarted, setIsTimerStarted] = useState(false)
  const [timerID, setTimerID] = useState(null)

  useEffect(() => {
    setTimer(timer)
  }, [timer])

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0')
    const seconds = (time % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  const startTimer = () => {
    if (!isTimerStarted) {
      const newTimer = setInterval(() => {
        setTimer((prevState) => prevState - 1)
      }, 1000)
      setTimerID(newTimer)
      setIsTimerStarted(true)
    }
  }

  const stopTimer = () => {
    clearInterval(timerID)

    setIsTimerStarted(false)
  }

  const newTim = formatTime(timerState)
  return (
    <span className="description">
      <button type="button" className="icon icon-play" aria-label="edit" onClick={startTimer} />
      <button type="button" className="icon icon-pause" aria-label="edit" onClick={stopTimer} />
      {newTim}
    </span>
  )
}
export default Timer
