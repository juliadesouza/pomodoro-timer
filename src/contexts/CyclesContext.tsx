import { createContext, type ReactNode, useState } from "react";

interface Cycle {
  id: string;
  task: string;
  durationInMinutes: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

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
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function createNewCycle(data: CreateNewCycleData) {
    const newCicle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      durationInMinutes: data.durationInMinutes,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCicle]);
    setActiveCycleId(newCicle.id);

    setAmountSecondsPassed(0);
  }

  function interruptCycle() {
    setCycles((state) =>
      state.map((cycle) =>
        cycle.id === activeCycleId
          ? { ...cycle, interruptedDate: new Date() }
          : cycle
      )
    );
    setActiveCycleId(null);
  }

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) =>
        cycle.id === activeCycleId
          ? { ...cycle, finishedDate: new Date() }
          : cycle
      )
    );
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
