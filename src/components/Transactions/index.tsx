import { useEffect } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

export function Transactions() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Site</td>
            <td className="deposit">R$ 20.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td>Carro</td>
            <td className="deposit">R$ 55.000,00</td>
            <td>Venda</td>
            <td>12/08/2021</td>
          </tr>

          <tr>
            <td>Aluguel do apartamento</td>
            <td className="withdraw">- R$ 1.200,00</td>
            <td>Casa</td>
            <td>06/08/2021</td>
          </tr>

          <tr>
            <td>Computador</td>
            <td className="withdraw">-R$ 15.800,00</td>
            <td>Compra</td>
            <td>23/07/2021</td>
          </tr>

        </tbody>
      </table>
    </Container>
  )
}