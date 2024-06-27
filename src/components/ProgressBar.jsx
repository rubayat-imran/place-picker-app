import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {

  const [remainingtime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 100)
    }, 100);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <progress value={remainingtime} max={timer} />
  );
}