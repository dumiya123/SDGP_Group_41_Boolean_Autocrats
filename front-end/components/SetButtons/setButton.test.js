import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";
import SetButton from "./setButton";

describe("SetButton", () => {
  it("renders correctly with default props", () => {
    const { getByText, getByTestId } = render(
      <SetButton title="Test Button" onPress={() => {}} />
    );

    const button = getByTestId("button");
    expect(button).toBeDefined();

    const buttonText = getByText("Test Button");
    expect(buttonText).toBeDefined();
  });

  it("calls onPress when button is pressed", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <SetButton title="Test Button" onPress={onPressMock} />
    );

    const button = getByTestId("button");
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
