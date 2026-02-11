import { TrendingDown, TrendingUp } from "lucide-react";

export default function SummaryCards({ totalAmount, totalIncomes, totalExpenses }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ">
            <div className="flex flex-row bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 backdrop-blur-sm border p-6 border-emerald-500/20 justify-between items-center rounded-3xl sm: w-50">
                <div className="text-green-500">
                    <p> TotalIncomes </p>
                    <h1>{totalIncomes}$</h1>
                </div>
                <div className="text-green-500 bg-emerald-500/20 p-4 w-17 rounded-2xl p-4 text-center border-none">
                    <TrendingUp size={30} />
                </div>
            </div>
            <div className="flex flex-row bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm border p-6 border-emerald-500/20 justify-between items-center sm: w-50  rounded-3xl">
                <div className="text-red-500">
                    <p> TotalExpenses </p>
                    <h1>{totalExpenses}$</h1>
                </div>
                <div className="text-red-500 bg-emerald-500/20 p-4 w-17 rounded-2xl p-4 text-center border-none">
                    <TrendingDown size={30} />
                </div>
            </div>
            <div className="flex flex-row bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-sm border p-6 border-emerald-500/20 justify-between items-center sm: w-50  rounded-3xl">
                <div className="text-blue-500">
                    <p> TotalAmount </p>
                    <h1>{totalAmount}$</h1>
                </div>
                <div className="text-blue-500 bg-emerald-500/20 p-4 w-17 rounded-2xl p-4 text-center border-none">
                    <TrendingUp size={30} />
                </div>
            </div>
        </div>
    )
}
