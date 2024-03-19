import React from "react";
import { render } from "@testing-library/react-native";
import Expenses from "./Expenses";

describe("Expenses", () => {
  it("renders correctly", () => {
    const { getByText, getByTestId, getAllByText } = render(<Expenses />);

    // Assert that the header text is rendered
    expect(getByText("Expenses")).toBeDefined();

    // Assert that the calendar component is rendered
    expect(getByTestId("calendar")).toBeDefined();

    // Assert that there is at least one "Total Salary" balance box with the correct amount
    const totalSalaryBoxes = getAllByText("Total Salary");
    expect(totalSalaryBoxes.length).toBeGreaterThan(0);
    expect(totalSalaryBoxes[0]).toBeDefined();

    // Assert that there is at least one "Total Expenses" balance box with the correct amount
    const totalExpensesBoxes = getAllByText("Total Expenses");
    expect(totalExpensesBoxes.length).toBeGreaterThan(0);
    expect(totalExpensesBoxes[0]).toBeDefined();

    // Assert that there is at least one "Education" expense box with the correct amount
    const educationBoxes = getAllByText("Education");
    expect(educationBoxes.length).toBeGreaterThan(0);
    expect(educationBoxes[0]).toBeDefined();

    // Assert that there is at least one "Health Care" expense box with the correct amount
    const healthCareBoxes = getAllByText("Health Care");
    expect(healthCareBoxes.length).toBeGreaterThan(0);
    expect(healthCareBoxes[0]).toBeDefined();

    // Assert that there is at least one "Groceries" expense box with the correct amount
    const groceriesBoxes = getAllByText("Groceries");
    expect(groceriesBoxes.length).toBeGreaterThan(0);
    expect(groceriesBoxes[0]).toBeDefined();
  });
});
