import { createStore } from "vuex";
import { shallowMount } from "@vue/test-utils";
import EntryList from "@/modules/daybook/components/EntryList";
import { getEntriesByTerm } from "@/modules/daybook/store/journal/getters";
import { journalState } from "../../../mock-data/test-journal-state";

describe("Testing EntryList Component", () => {
  const journalMockModule = {
    namespaced: true,
    getters: {
      //   getEntriesByTerm: jest.fn()
      getEntriesByTerm,
    },
    state: () => ({
      isLoading: false,
      entries: journalState.entries,
    }),
  };

  const mockRouter = {
    push: jest.fn(),
  };

  const store = createStore({
    modules: {
      journal: { ...journalMockModule },
    },
  });

  const wrapper = shallowMount(EntryList, {
    global: {
      mocks: {
        $router: mockRouter,
      },
      plugins: [store],
    },
  });

  test("Must call 'getEntriesByTerm' and show 2 entries", () => {
    console.log(wrapper.html());
  });
});
