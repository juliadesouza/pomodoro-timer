import { FormContainer, TaskInput, DurationInput } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { useFormContext } from "react-hook-form";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">I'll work on</label>
      <TaskInput
        type="text"
        id="task"
        list="taskSuggestions"
        placeholder="your task"
        {...register("task")}
        disabled={!!activeCycle}
      />

      <datalist id="taskSuggestions">
        <option value="Design Review" />
        <option value="Code Refactoring" />
        <option value="Client Meeting" />
        <option value="Bug Fixing" />
        <option value="Feature Development" />
        <option value="Team Sync" />
        <option value="Market Research" />
        <option value="UI Improvements" />
        <option value="Test Automation" />
        <option value="Documentation" />
      </datalist>

      <label htmlFor="durationInMinutes">for</label>
      <DurationInput
        type="number"
        id="durationInMinutes"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register("durationInMinutes", { valueAsNumber: true })}
        disabled={!!activeCycle}
      />

      <span>minutes.</span>
    </FormContainer>
  );
}
