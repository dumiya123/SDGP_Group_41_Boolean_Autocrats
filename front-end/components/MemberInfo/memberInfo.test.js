import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import MemberInfo from "./memberInfo";

describe("MemberInfo", () => {
  const name = "John Doe";
  const email = "johndoe@example.com";
  const openEmailAppMock = jest.fn();

  it("renders correctly", () => {
    const { getByText } = render(
      <MemberInfo name={name} email={email} openEmailApp={openEmailAppMock} />
    );

    expect(getByText(name)).toBeTruthy();
    expect(getByText(email)).toBeTruthy();
    expect(getByText("Second year student at IIT")).toBeTruthy();
  });

  it("calls openEmailApp when SettingsItem is pressed", () => {
    const { getByText } = render(
      <MemberInfo name={name} email={email} openEmailApp={openEmailAppMock} />
    );
    const settingsItem = getByText(email);
    fireEvent.press(settingsItem);

    expect(openEmailAppMock).toHaveBeenCalledWith(email);
  });
});
