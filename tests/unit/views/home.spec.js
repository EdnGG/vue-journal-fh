import { shallowMount } from "@vue/test-utils";
import Home from "@/views/HomeView";

describe("Testing HomeView", () => {
  // Clear all mocks evita el warning de que se esta llamando a un mock que no existe
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Must match with snapshot", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("when click on button, redirect to no-entry", () => {
    const mockRouter = {
      push: jest.fn(),
    };

    const wrapper = shallowMount(Home, {
      global: {
        mocks: { $router: mockRouter },
      },
    });
    wrapper.find("button").trigger("click");
    expect(mockRouter.push).toHaveBeenCalled();
    expect(mockRouter.push).toHaveBeenCalledWith({ name: "no-entry" });
  });
});

// Path: journal-app/tests/unit/views/about.spec.js
