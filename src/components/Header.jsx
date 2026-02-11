import { Wallet } from "lucide-react";
export default function Header() {
    return (
        <div className="flex flex-col items-center justify-between text-center mx-auto gap-2 mb-4">
            <div className="bg-gradient-to-br from-green-600 via-blue-600 to-green-600 p-4 w-20 rounded-2xl p-4 text-center">
                <Wallet size={50} color="white" />
            </div>
            <h1 className="text-blue-500 text-3xl font-bold">MoneyFlow</h1>
            <p className="text-white">Master you finance with style</p>
        </div>
    )
}
