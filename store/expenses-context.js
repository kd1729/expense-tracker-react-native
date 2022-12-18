import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ title, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { title, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [...state, { ...action.payload, id: id }];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "UPDATE":
      return state.map((expense) => {
        if (expense.id === action.payload.id) {
          return {
            ...expense,
            ...action.payload.data,
          };
        }
        return expense;
      });
    default:
      return state;
  }
}

export default function ExpenseContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expenseReducer, []);

  function addExpense({ title, amount, date }) {
    dispatch({
      type: "ADD",
      payload: {
        title,
        amount,
        date,
      },
    });
  }

  function deleteExpense(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  function updateExpense(id, { title, amount, date }) {
    dispatch({
      type: "UPDATE",
      payload: {
        id,
        data: {
          title,
          amount,
          date,
        },
      },
    });
  }

  const value = {
    expenses: expenseState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
