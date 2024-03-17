import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import NotificationSwitch from "./Switch";

describe("NotificationSwitch", () => {
  it("renders correctly", () => {
    const { getByText, getByTestId } = render(
      <NotificationSwitch label="Test Label" />
    );

    expect(getByText("Test Label")).toBeTruthy();
    expect(getByTestId("switch")).toBeTruthy();
  });

  it("toggles switch state", () => {
    const { getByTestId } = render(<NotificationSwitch label="Test Label" />);
    const switchComponent = getByTestId("switch");

    fireEvent(switchComponent, "valueChange", { nativeEvent: { value: true } });
    expect(switchComponent.props.value).toEqual(true);

    fireEvent(switchComponent, "valueChange", {
      nativeEvent: { value: false },
    });
    expect(switchComponent.props.value).toEqual(false);
  });
});
