import {
  createContext,
  type ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { type Cycle, cyclesReducer } from "../reducers/cycles/reducer";
import {
  addNewCycleAction,
  interruptCycleAction,
  markCurrentCycleAsFinishedAction,
} from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";

interface CyclesContextType {
  activeCycleId: string | null;
  activeCycle: Cycle | undefined;
  cycles: Cycle[];
  markCurrentCycleAsFinished: () => void;
  amountSecondsPassed: number;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateNewCycleData) => void;
  interruptCycle: () => void;
}

interface CreateNewCycleData {
  task: string;
  durationInMinutes: number;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProviderProps {
  children: ReactNode;
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@pomodoro-timer:cycles-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    }
  );

  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }

    return 0;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem("@pomodoro-timer:cycles-state-1.0.0", stateJSON);
  }, [cyclesState]);

  function createNewCycle(data: CreateNewCycleData) {
    const newCicle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      durationInMinutes: data.durationInMinutes,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCicle));

    setAmountSecondsPassed(0);
  }

  function interruptCycle() {
    dispatch(interruptCycleAction());
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        cycles,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
