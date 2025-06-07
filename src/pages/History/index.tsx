import { HistoryContainer, HistoryList } from "./styles";
export const History = () => {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Projeto 1</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Projeto 2</td>
              <td>30 minutos</td>
              <td>Há cerca de 10 meses</td>
              <td>Em andamento</td>
            </tr>
            <tr>
              <td>Projeto 3</td>
              <td>15 minutos</td>
              <td>Há cerca de 5 meses</td>
              <td>Interrompido</td>
            </tr>
            <tr>
              <td>Projeto 4</td>
              <td>45 minutos</td>
              <td>Há cerca de 1 mês</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Projeto 5</td>
              <td>20 minutos</td>
              <td>Há cerca de 3 semanas</td>
              <td>Em andamento</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
};
