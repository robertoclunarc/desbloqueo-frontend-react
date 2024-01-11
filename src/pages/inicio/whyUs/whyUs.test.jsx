import { screen } from "@testing-library/react";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import WhyUs from "./WhyUs";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("renders", () => {
  act(() => {
    render(<WhyUs />, container);
  });
  let title = screen.getByText("¿Por qué escoger a DesbloqueaMiCel?")
  expect(title).toBeTruthy();
});