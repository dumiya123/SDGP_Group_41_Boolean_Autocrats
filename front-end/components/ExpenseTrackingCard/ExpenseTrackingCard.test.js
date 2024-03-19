import React from "react";
import { render } from "@testing-library/react-native";
import ExpenseTrackingCard from "./ExpenseTrackingCard";

// Mock the Ionicons component
jest.mock("@expo/vector-icons", () => ({
  Ionicons: "IconMock",
}));

describe("ExpenseTrackingCard", () => {
  it("renders correctly", () => {
    const props = {
      expenseType: "Food",
      topIconName: "restaurant",
      setBudget: 100,
      spentAmount: 50,
      onPress: jest.fn(),
    };
    const { getByText, getByTestId } = render(
      <ExpenseTrackingCard {...props} />
    );

    expect(getByText("Food")).toBeTruthy();
    expect(getByTestId("topIcon").props.name).toBe("restaurant");
    expect(getByText("$ 100")).toBeTruthy();
    expect(getByText("$ 50")).toBeTruthy();
  });
});
