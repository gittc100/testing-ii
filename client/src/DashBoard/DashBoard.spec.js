import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import DashBoard from './DashBoard.js';
import Display from '../Display/Display.js';

  describe("Push Button", () => {
    it("Should Provide Button Value", () => {
      const { getByText } = render(<DashBoard />);
      const { getByTestId, rerender } = render(<Display strikes={1}/>);

      fireEvent.click(getByText(/strike!/i));
      expect(getByTestId("strikes")).toHaveTextContent('1');

      rerender(<Display balls={2}/>);
      fireEvent.click(getByText(/ball!/i));
      expect(getByTestId("balls")).toHaveTextContent('2');

      rerender(<Display fouls={1}/>);
      fireEvent.click(getByText(/foul!/i));
      expect(getByTestId("fouls")).toHaveTextContent('1');

      rerender(<Display hits={6}/>);
      fireEvent.click(getByText(/hit!/i));
      expect(getByTestId("hits")).toHaveTextContent('6');
    });
  });


