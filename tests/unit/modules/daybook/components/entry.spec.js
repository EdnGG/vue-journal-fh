import { shallowMount } from "@vue/test-utils";
import Entry from "@/modules/daybook/components/Entry";
import { journalState } from "../../../mock-data/test-journal-state";

describe("Testing Entry Component", () => {
  const mockRouter = {
    push: jest.fn(),
  };

  const wrapper = shallowMount(Entry, {
    props: {
      entry: journalState.entries[0],
    },
    global: {
      mocks: {
        $router: mockRouter,
      },
    },
  });

  test("must match the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("must redirect when click on entry-container", () => {
    wrapper.find(".entry-container").trigger("click");
    expect(mockRouter.push).toHaveBeenCalled();

    expect(mockRouter.push).toHaveBeenCalledWith({
      name: "entry",
      params: {
        //  id: wrapper.props().entry.id,
        //   id: "-NT6lYa-7HVHjuCGUCmk",
        id: journalState.entries[0].id,
      },
    });
  });

  test("Testing computed properties", () => {
    expect(wrapper.vm.day).toBe("Saturday");
    expect(wrapper.vm.month).toBe("April");
    expect(wrapper.vm.yearDay).toBe("2023, Saturday");
  });
});
