import { createContext, useContext, type ReactNode, useReducer } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimerContextValue = TimersState & {
  addTimer: (timer: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

type TimerContextProviderProps = {
  children: ReactNode;
};

type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};

type StartTimersAction = {
  type: "START_TIMERS";
};

type StopTimersAction = {
  type: "STOP_TIMERS";
};

type Action = StopTimersAction | StartTimersAction | AddTimerAction;

const initialState: TimersState = {
  timers: [],
  isRunning: false,
};

const TimerContext = createContext<TimerContextValue | null>(null);

export function useTimerContext() {
  const timersContext = useContext(TimerContext);

  if (timersContext === null) {
    throw new Error("TimerContext is null");
  }

  return timersContext;
}

export default function TimersContextProvider({
  children,
}: TimerContextProviderProps) {
  function timersReducer(state: TimersState, action: Action): TimersState {
    switch (action.type) {
      case "ADD_TIMER":
        return { ...state, timers: [...state.timers, action.payload] };
      case "START_TIMERS":
        return { ...state, isRunning: true };
      case "STOP_TIMERS":
        return { ...state, isRunning: false };
      default:
        return state;
    }
  }

  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimerContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,

    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimers() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMERS" });
    },
  };

  return <TimerContext.Provider value={ctx}>{children}</TimerContext.Provider>;
}
