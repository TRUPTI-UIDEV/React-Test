import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Carlist from "./Carlist";

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

it("renders user data", async () => {
  const fakeUser = {
    mission_name: "Joni Baez",
    id: "12"
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Carlist id="12" />, container);
  });

  expect(container.querySelector("summary").textContent).toBe(fakeUser.id);
  expect(container.querySelector("strong").textContent).toBe(fakeUser.mission_name);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
