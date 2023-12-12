import NavButtons from "./NavButtons";
import { renderWithProviders } from "../../Utils/testStore";

describe("NavButtons", function () {
  const initialState = {
    appSlice: {
      scanViewVisible: true,
      previousPage: false,
    },
  };
  const showBackButton = {
    appSlice: {
      scanViewVisible: true,
      previousPage: true,
    },
  };

  it("should display a list of two buttons (button element and text)", function () {
    const navButtons = renderWithProviders(<NavButtons validity={true} />, {
      preloadedState: initialState,
    });
    const buttons = navButtons.getAllByRole({ role: "button" });
    expect(navButtons).toMatchSnapshot();
    expect(buttons.length).toBe(2);
  });

  it("should display a list of four buttons (button element and text) when the Scan View is visible and Previous Page exists", function () {
    const navButtons = renderWithProviders(<NavButtons validity={true} />, {
      preloadedState: showBackButton,
    });
    const buttons = navButtons.getAllByRole({ role: "button" });
    expect(navButtons).toMatchSnapshot();
    expect(buttons.length).toBe(4);
  });
});
