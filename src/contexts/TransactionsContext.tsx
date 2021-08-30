import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '../services/api'

interface Transaction {
  id: number;
  title: string;
  createdAt: string;
  category: string;
  type: string;
  amount: number;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>; //toda assíncrona retorna uma Promise
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>
//Herda todos os campos da tipagem que no caso é a Transaction, e omite os campo que você quiser.

//type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>
//O contrário do omit você escolhe quais tipagens quer usar.

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider(props: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })
    const { transaction } = response.data

    setTransactions([ ...transactions, transaction ])
    //Cria um novo array copiando o array anterior e adicionando uma nova posição.
  }

  return (
    <TransactionsContext.Provider 
      value={{ transactions, createTransaction }}
    >
      { props.children }
    </TransactionsContext.Provider>
  )
}

