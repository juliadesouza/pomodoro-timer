import { Play } from "phosphor-react";
import {
  FormContainer,
  HomeContainer,
  CountdownContainer,
  Separator,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="text" id="task" />

          <label htmlFor="durationInMinutes">durante</label>
          <input type="text" id="durationInMinutes" />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play size={24} /> Começar
        </button>
      </form>
    </HomeContainer>
  );
}
