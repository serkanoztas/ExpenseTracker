import { Check, Pencil, Trash, TrendingDown, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ExpensesFilter({ expenses, onDelete, setExpenses }) {

    const emptyExpense = {
        description: "",
        category: "Food",
        date: "",
        amount: "",
        entryType: "Expense"
    }

    const [editingid, setEditingid] = useState(null);
    const [editingExpense, setEditingExpense] = useState(emptyExpense)

    const saveEdit = (id) => {
        setExpenses(prev =>
            prev.map(exp =>
                exp.id === id
                    ? {
                        ...exp,
                        ...editingExpense,
                        amount: Number(editingExpense.amount)
                    }
                    : exp
            )
        )
        setEditingid(null);
        setEditingExpense(emptyExpense);
    }


    return (
        <div className="'bg-gradient-to-r from-emerald-500/10 to-pink-600/10 backdrop-blur-sm shadow-xl rounded-2xl text-center text-gray-300">
            {
                expenses.map(exp => (
                    <div key={exp.id} className='flex flex-row justify-around items-center p-2'>
                        {
                            exp.entryType == "Expense" ? <div className="text-green-500 bg-red-500/20 p-2 rounded-2xl text-center border-none">
                                <TrendingDown color="red" /></div> : <div className="text-green-500 bg-green-500/20 p-2 rounded-2xl text-center border-none"> <TrendingUp color="green" />  </div>


                        }
                        <div className="flex flex-col">
                            {
                                editingid === exp.id && editingExpense ? <> <input placeholder="Plese chance description" type="text" className="text-white font-bold" value={editingExpense.description} onChange={(e) => setEditingExpense(prev => ({ ...prev, description: e.target.value }))} /> </>
                                    : <h1 className="text-white font-bold"> {exp.description} </h1>
                            }

                            <div className="flex flex-row gap-2">
                                {
                                    editingid === exp.id && editingExpense ?
                                        <>
                                            <select
                                                value={editingExpense.category}
                                                onChange={(e) =>
                                                    setEditingExpense(prev => ({
                                                        ...prev,
                                                        category: e.target.value
                                                    }))
                                                }
                                            >
                                                <option value="Food">Food</option>
                                                <option value="Entertainment">Entertainment</option>
                                                <option value="Education">Education</option>
                                                <option value="Travel">Travel</option>
                                                <option value="Shopping">Shopping</option>
                                                <option value="Healthcare">Healthcare</option>
                                                <option value="Other">Other</option>
                                            </select>

                                            <input
                                                type="date"
                                                value={editingExpense.date}
                                                onChange={(e) =>
                                                    setEditingExpense(prev => ({
                                                        ...prev,
                                                        date: e.target.value
                                                    }))
                                                }
                                            />
                                        </>
                                        :
                                        <>
                                            <p className="text-sm"> {exp.category} </p>
                                            <p className="text-sm"> {exp.date} </p>
                                        </>
                                }
                            </div>
                        </div>
                        {
                            editingid === exp.id && editingExpense ? <input className="w-12 justify-center items-center" value={editingExpense.amount} onChange={(e) => setEditingExpense(prev => ({
                                ...prev, amount: e.target.value
                            }))} type="number" /> : <h1 className="w-12"> {exp.amount} </h1>}


                        {
                            editingid === exp.id && editingExpense ? <button onClick={() => saveEdit(exp.id)}><Check color="green" size={25} /></button> :
                                <button className="cursor-pointer  " onClick={() => {
                                    setEditingid(exp.id)
                                    setEditingExpense({ ...exp })
                                }}> <Pencil /></button>
                        }

                        <button className="cursor-pointer " onClick={() => onDelete(exp.id)}><Trash /></button>
                    </div>
                ))
            }
        </div>
    )
}
