import { render, cleanup } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from "./Navbar";


afterEach(() => {
  cleanup()
});


it("renders", () => {
  const { getByText } = render(<Router><Navbar /></Router>);

  expect(getByText("DesbloqueaMiCel")).toBeTruthy();

});