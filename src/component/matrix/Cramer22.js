import { render, screen, fireEvent } from "@testing-library/react";
import App from "./Cramer";

test("calls Calcramer function when Create Matrix button is clicked", () => {
  const calcramerMock = jest.fn();
  const { getByText } = render(<App calcramer={calcramerMock} />);
  const buttonElement = getByText("Create Matrix");
  fireEvent.click(buttonElement);
  expect(calcramerMock).toHaveBeenCalledTimes(1);
});
