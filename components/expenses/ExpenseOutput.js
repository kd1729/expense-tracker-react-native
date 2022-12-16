import { View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    { id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14) },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    { id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: "e4", title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12) },
    // { id: "e5", title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14) },
    // { id: "e6", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    // { id: "e7", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    // { id: "e8", title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12) },
    // { id: "e9", title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14) },
    // { id: "e10", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    // { id: "e11", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    // { id: "e12", title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12) },
];

export default function ExpensesOutput({expenses, expensesPeriod}){
    return(
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />    
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    },
});