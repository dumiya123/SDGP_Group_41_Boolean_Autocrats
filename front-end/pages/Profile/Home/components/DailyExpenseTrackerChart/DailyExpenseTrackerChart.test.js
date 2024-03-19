import React from "react";
import { render } from "@testing-library/react-native";
import DailyExpenseTrackerChart from "./DailyExpenseTrackerChart";

describe("DailyExpenseTrackerChart", () => {
  it("renders correctly", () => {
    const { getByText } = render(<DailyExpenseTrackerChart />);
    const titleText = getByText("Daily Expenses");
    expect(titleText).toBeTruthy();
  });
});
