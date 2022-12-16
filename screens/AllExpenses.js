import { Text, View } from "react-native"
import ExpensesOutput from "../components/expenses/ExpenseOutput"

export default function AllExpenses(){
    return(
        <ExpensesOutput expensesPeriod={"Total"} />
    );
};