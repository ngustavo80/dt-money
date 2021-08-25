import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { Transactions } from "./components/Transactions";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Transactions />
      <GlobalStyle />
    </>
  );
}