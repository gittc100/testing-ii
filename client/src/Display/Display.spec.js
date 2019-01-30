import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display.js";

describe("<Display />", () => {
  it("Renders Correct Info", () => {
    const { getByTestId, rerender } = render(<Display />);
    expect(getByTestId("title")).toHaveTextContent(/Player At Bat/i);

    rerender(<Display balls={1} strikes={0} fouls={2} hits={1} />);
    expect(getByTestId("balls")).toHaveTextContent("1");
    expect(getByTestId("strikes")).toHaveTextContent("0");
    expect(getByTestId("fouls")).toHaveTextContent("2");
    expect(getByTestId("hits")).toHaveTextContent("1");

    rerender(<Display balls={0} strikes={0} fouls={1} hits={1} />);
    expect(getByTestId("balls")).toHaveTextContent("0");
    expect(getByTestId("strikes")).toHaveTextContent("0");
    expect(getByTestId("fouls")).toHaveTextContent("1");
    expect(getByTestId("hits")).toHaveTextContent("1");
  });
});

