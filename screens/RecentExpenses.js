import { useContext } from "react";
import ExpensesOutput from "../components/expenses/ExpenseOutput"
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";

export default function RecentExpenses(){

    const { expenses } = useContext(ExpensesContext);

    const recentExpenses = expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        return expense.date >= date7DaysAgo;
    });

    return(
        <ExpensesOutput expenses={recentExpenses} expensesPeriod={"Last 7 days"} />
    );
};