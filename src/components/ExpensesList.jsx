import ExpensesFilter from './ExpensesFilter'
export default function ExpensesList({ expenses, onDelete, setExpenses }) {
    return (
        <div className='bg-gradient-to-r from-emerald-500/10 to-pink-600/10 backdrop-blur-sm p-4 rounded-t-3xl shadow-xl'>
            <div className='flex flex-row items-center justify-center text-white bg-purple-800 rounded-xl p-2 text-sm  mb-5'>
                <button className=' p-2 rounded-xl transition-colors duration-300'>All Entries</button>
            </div>
            <div>
                <ExpensesFilter expenses={expenses} onDelete={onDelete} setExpenses={setExpenses} />
            </div>
        </div>
    )
}
