import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SignupScreen from "./signUp";
import useSignUpFunctions from "./useSignUpFunctions";

// Mock the useSignUpFunctions hook
jest.mock("./useSignUpFunctions", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    userName: "test",
    email: "test",
    password: "test",
    loading: false,
    setUserName: jest.fn(),
    setEmail: jest.fn(),
    setPassword: jest.fn(),
    handleSignup: jest.fn(),
    onLoginClick: jest.fn(),
  })),
}));

// Mock the Ionicons component
jest.mock("@expo/vector-icons", () => ({
  Ionicons: "IconMock",
}));

describe("SignupScreen", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { getByText, getByPlaceholderText } = render(<SignupScreen />);
    expect(getByText("Hello! Register to get Started!")).toBeTruthy();
    expect(getByPlaceholderText("Enter Username")).toBeTruthy();
    expect(getByPlaceholderText("Enter Email")).toBeTruthy();
    expect(getByPlaceholderText("Enter Password")).toBeTruthy();
    expect(getByPlaceholderText("Confirm Password")).toBeTruthy();
    expect(getByText("Agree to Terms And Conditions")).toBeTruthy();
    expect(getByText("Create an Account")).toBeTruthy();
    expect(getByText("Already have an account?")).toBeTruthy();
    expect(getByText("Log in")).toBeTruthy();
  });
});
