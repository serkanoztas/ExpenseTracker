import { Plus } from "lucide-react";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useActionState, useEffect, useState } from "react";




export default function AddExpensesForm({ setExpenses }) {

    const [formData, setFormData] = useState({
        description: "",
        amount: "",
        category: "",
        entryType: null,
        date: ""
    });


    const handleSubmit = () => {
        const newExpense = {
            id: crypto.randomUUID(),
            ...formData
        }

        setExpenses(prev => [...prev, newExpense]);
    }

    return (
        <div className="bg-gradient-to-r from-emerald-500/10 to-pink-600/10 backdrop-blur-sm p-4 rounded-3xl shadow-2xl text-white">
            <div className="flex flex-row items-center gap-2">
                <div className="text-pink-500 bg-pink-500/20 p-3 rounded-2xl text-center border-none">
                    <Plus size={15} />
                </div>
                <h1 className="text-white font-bold">Add New Entry</h1>
            </div>
            <div className="flex flex-col mt-4 gap-2 text-gray-300">
                <p className="text-white text-sm">Entry Type</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    {
                        formData.entryType == "Expense" ? <><button onClick={() => setFormData({ ...formData, entryType: "Expense" })} className={` ${formData.entryType == "Expense" ? "bg-red-900" : "bg-transparent -900"}  text-gray-300 flex flex-row border-2 rounded-xl px-8 py-3 gap-2 justify-center flex-1  cursor-pointer max-w-auto`}> <TrendingDown size={20} /> <p className="auto">Expense</p> </button>
                            <button onClick={() => setFormData({ ...formData, entryType: "Income" })} className=" text-gray-300 flex flex-row border-2 rounded-xl px-8 py-3 gap-2 justify-center flex-1  cursor-pointer   max-w-auto"> <TrendingUp size={20} /> <p className="auto">Income</p> </button></>
                            :
                            <><button onClick={() => setFormData({ ...formData, entryType: "Expense" })} className="text-gray-300 flex flex-row border-2 rounded-xl px-8 py-3 gap-2 justify-center flex-1  cursor-pointer max-w-auto"> <TrendingDown size={20} /> <p className="auto">Expense</p> </button>
                                <button onClick={() => setFormData({ ...formData, entryType: "Income" })} className={` ${formData.entryType == "Income" ? "bg-green-900" : "bg-transparent -900"}  text-gray-300 flex flex-row border-2 rounded-xl px-8 py-3 gap-2 justify-center flex-1  cursor-pointer max-w-auto`}> <TrendingUp size={20} /> <p className="auto">Income</p> </button></>
                    }
                </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <p className="text-white">Description</p>
                <input onChange={(e) => setFormData({ ...formData, description: e.target.value })} type="text" placeholder="What is this for?" className="border-gray-500 border-1 rounded-2xl p-3 bg-purple-800 backdrop-blur-2xl placeholder:text-gray-300 text-sm" />
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <p className="text-white">Amount</p>
                <input onChange={(e) => setFormData({ ...formData, amount: e.target.value })} type="number" placeholder="$ 0.00" className="border-gray-500 border-1 rounded-2xl p-3 bg-purple-800 backdrop-blur-2xl placeholder:text-gray-300 text-sm" />
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <p className="text-white">Category</p>
                <select onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="border-gray-500 text-gray-300 border-1 rounded-2xl p-3 bg-purple-800 backdrop-blur-2xl placeholder:text-gray-300 text-sm">
                    <option value="Food">Food</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Education">Education</option>
                    <option value="Travel">Travel</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <p className="text-white">Date</p>
                <input onChange={(e) => setFormData({ ...formData, date: e.target.value })} type="date" placeholder="What is this for?" className="border-gray-500 border-1 text-gray-300 rounded-2xl p-3 bg-purple-800 backdrop-blur-2xl placeholder:text-gray-300 text-sm " />
            </div>

            <div className="flex justify-center mt-4">
                <button onClick={handleSubmit} className="text-white bg-purple-800 rounded-xl px-6 py-2 text-sm hover:bg-red-600 transition-colors duration-300 ">Add Entry</button>
            </div>

        </div>
    )
}
