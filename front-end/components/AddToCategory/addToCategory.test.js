import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AddItemForm from "./addToCategory";

describe("AddItemForm", () => {
  it("submits form with valid input", () => {
    const onSubmitMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <AddItemForm
        categoryName="Test Category"
        backgroundImage="../../pages/Profile/Add/AddImages/fish.jpg"
        onSubmit={onSubmitMock}
      />
    );

    fireEvent.changeText(
      getByPlaceholderText("Enter Name of the product/service"),
      "Test Name"
    );
    fireEvent.changeText(
      getByPlaceholderText("Enter the amount for the month"),
      "50"
    );
    fireEvent.press(getByText("Submit"));

    expect(onSubmitMock).toHaveBeenCalledWith({
      name: "Test Name",
      amount: 50,
    });
  });

  it("displays alert with invalid input", () => {
    global.alert = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <AddItemForm
        categoryName="Test Category"
        backgroundImage="../../pages/Profile/Add/AddImages/fish.jpg"
        onSubmit={() => {}}
      />
    );

    fireEvent.changeText(
      getByPlaceholderText("Enter Name of the product/service"),
      "Test Name"
    );
    fireEvent.changeText(
      getByPlaceholderText("Enter the amount for the month"),
      "Invalid"
    );
    fireEvent.press(getByText("Submit"));

    expect(global.alert).toHaveBeenCalledWith("Please enter a valid amount.");
  });
});
