import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/expenses/ExpenseOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";

export default function RecentExpenses() {
  const [isLoading, setIsLoading] = useState(true);
  const { expenses, setExpenses } = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      setIsLoading(false);
      setExpenses(expenses);
    }
    getExpenses();
  }, []);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo;
  });

  if(isLoading) {
    return <LoadingOverlay />
  }

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod={"Last 7 days"} />
  );
}
