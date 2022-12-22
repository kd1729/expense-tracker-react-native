import { StyleSheet, View } from "react-native";
import { useContext, useLayoutEffect, useState } from "react";

import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/manageExepense/ExpenseForm";
import { StoreExpense, UpdateExpense, DeleteExpense } from "../utils/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";

export default function ManageExpense({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  const { expenses, addExpense, updateExpense, deleteExpense } =
    useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setIsLoading(true);
    await DeleteExpense(editedExpenseId);
    deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    setIsLoading(true);
    if (isEditing) {
      updateExpense(editedExpenseId, expenseData);
      await UpdateExpense(editedExpenseId, expenseData);
    } else {
      const id = StoreExpense(expenseData);
      addExpense({ ...expenseData, id: id });
    }
    navigation.goBack();
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        expenseData={expenses.find((expense) => expense.id === editedExpenseId)}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
