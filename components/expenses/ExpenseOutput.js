import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesList from "./ExpensesList";

export default function ExpensesOutput({expenses}){
    return(
        <View>
            <ExpensesList expenses={expenses} />
        </View>
    );
};