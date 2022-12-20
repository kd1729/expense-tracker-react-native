import { View, Button, StyleSheet } from "react-native";

import Input from "./Input";

export default function ExpenseForm() {
  function amountChangedHandler(text) {
    console.log(text);
  }

  function dateChangedHandler(text) {
    console.log(text);
  }

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          placeholder: "Enter amount",
          keyboardType: "decimal-pad",
          maxLength: 10,
          onChangeText: amountChangedHandler,
        }}
      />

      <Input
        label="Date"
        textInputConfig={{
          placeholder: "Enter date (YYYY-MM-DD)",
          keyboardType: "default",
          maxLength: 10,
          onChangeText: dateChangedHandler,
        }}
      />

      <Input
        label="Title"
        textInputConfig={{
          placeholder: "Enter title",
          maxLength: 100,
          keyboardType: "default",
          multiline: true,
          autoCapitalize: "sentences",
        }}
      />

    </View>
  );
}
