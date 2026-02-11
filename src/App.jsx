import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import SummaryCards from './components/SummaryCards'
import AddExpensesForm from './components/AddExpensesForm'
import ExpensesList from './components/ExpensesList'
import { Cigarette } from 'lucide-react'


function App() {

  const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("expenses")) || []
  })

  //amount hesabı
  const totalExpenses = expenses.filter((e) => e.entryType == "Expense").reduce((sum, e) => sum + Number(e.amount), 0);
  const totalIncomes = expenses.filter((e) => e.entryType == "Income").reduce((sum, e) => sum + Number(e.amount), 0);
  const totalAmount = totalIncomes - totalExpenses;

  console.log(expenses.map(e => e.entryType))


  //
  const handleDelete = (id) => {
    setExpenses(prev => prev.filter(exp => exp.id !== id))
  }


  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    localStorage.setItem("expenses", JSON.stringify(expenses))

  }, [expenses])

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-24 py-4 font-serif'>
      <div className='max-w-7xl mx-auto'>
        <Header />
      </div>
      <div className="max-w-7xl mx-auto">
        <SummaryCards totalExpenses={totalExpenses} totalIncomes={totalIncomes} totalAmount={totalAmount} />
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-5 gap-8'>,
        <div className='xl:col-span-2'>
          <AddExpensesForm setExpenses={setExpenses} />
        </div>
        <div className='xl:col-span-2'>
          <ExpensesList expenses={expenses} onDelete={handleDelete} setExpenses={setExpenses} />
        </div>
      </div>
    </div>
  )
}

export default App
