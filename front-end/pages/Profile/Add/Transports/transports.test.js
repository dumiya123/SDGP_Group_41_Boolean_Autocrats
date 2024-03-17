import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TransportScreen from "./transports";
import AddItemForm from "../../../../components/AddToCategory/addToCategory"; // Import AddItemForm component

// Mock the console.log function to prevent it from logging during tests
global.console = {
  log: jest.fn(),
};

// Mock the AddItemForm component
jest.mock("../../../../components/AddToCategory/addToCategory", () => {
  return jest.fn(() => <></>);
});

describe("TransportScreen", () => {
  it("renders correctly", () => {
    render(<TransportScreen />);
    expect(AddItemForm).toHaveBeenCalledWith(
      { categoryName: "Transport", onSubmit: expect.any(Function) },
      {}
    );
  });
});
