import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import PushNotificationButton from "./pushNotifications";

// Mock the console.log function to prevent it from printing to the console
console.log = jest.fn();

describe("PushNotificationButton", () => {
  it("renders correctly", () => {
    const { getAllByTestId } = render(<PushNotificationButton />);
    const notificationSwitch1 = getAllByTestId("switch");

    expect(notificationSwitch1).toBeDefined();
  });
});
