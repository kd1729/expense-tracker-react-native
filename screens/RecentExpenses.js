import { Text, View } from "react-native"
import ExpensesOutput from "../components/expenses/ExpenseOutput"

export default function RecentExpenses(){
    return(
        <ExpensesOutput expensesPeriod={"Last 7 days"} />
    );
};