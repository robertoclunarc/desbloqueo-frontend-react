import { render, cleanup } from "@testing-library/react";
import React from "react";

import Form from "./Form";

afterEach(() => {
  cleanup();
});

it("renders with or without content", () => {
  const { container } = render(<Form />);

  expect(container.children).toBeTruthy();
});