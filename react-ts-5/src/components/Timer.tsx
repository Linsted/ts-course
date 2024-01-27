import { useEffect, useRef, useState } from "react";

import Container from "./UI/Container.tsx";

import {
  useTimersContext,
  type Timer as TimerProps,
} from "../store/timers-context.tsx";

export default function Timer({ name, duration }: TimerProps) {
  const intervalId = useRef<number | null>(null);
  const [time, setTime] = useState(duration * 1000);

  const { isRunning } = useTimersContext();

  if (time <= 0 && intervalId.current) {
    clearInterval(intervalId.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            return prevTime;
          }

          return prevTime - 50;
        });
      }, 50);

      intervalId.current = timer;
    } else if (intervalId.current) {
      clearInterval(intervalId.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedTime = (time / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={time} />
      </p>
      <p>{formattedTime}</p>
    </Container>
  );
}
