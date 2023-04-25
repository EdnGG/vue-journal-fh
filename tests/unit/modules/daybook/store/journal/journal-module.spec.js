import { createStore } from "vuex";
import journalModule from "@/modules/daybook/store/journal";
import { journalState } from "../../../../mock-data/test-journal-state";
// import { journalState} from "tests/unit/mock-data/test-journal-state";

const createVuexStore = (initialState) =>
  createStore({
    modules: {
      journal: {
        // desctructurar el objeto journalModule
        ...journalModule,
        //   sobreescribir el estado con lo que tenga en el initialState
        state: { ...initialState },
      },
    },
  });

describe("VUEX testing journal module", () => {
  test("Initial state in journal module", () => {
    const store = createVuexStore(journalState);
    const { isLoading, entries } = store.state.journal;

    expect(isLoading).toBeFalsy();
    expect(entries).toEqual(journalState.entries);
  });

  //MUTATIONS
  test("mutations - setEntries", () => {
    const store = createVuexStore({ isLoading: true, entries: [] });
    store.commit("journal/setEntries", journalState.entries);
    expect(store.state.journal.entries.length).toBe(2);
    expect(store.state.journal.isLoading).toBeFalsy();
  });

  test("mutations- updateEntry", () => {
    const store = createVuexStore(journalState);
    const updatedEntry = {
      id: "-NT6lYa-7HVHjuCGUCmk",
      date: 1681610120104,
      text: "hello world with image\n",
    };
    store.commit("journal/updateEntry", updatedEntry);
    const { entries } = store.state.journal;
    expect(entries.length).toBe(2);
    expect(entries.find((e) => e.id === updatedEntry.id)).toEqual(updatedEntry);
  });

  test("mutations - addEntry and deleteEntry", () => {
    const store = createVuexStore(journalState);

    store.commit("journal/addEntry", { id: "ABC-123", text: "Hola mundo" });

    const { entries } = store.state.journal;

    expect(entries.length).toBe(3);
    expect(entries.find((e) => e.id === "ABC-123")).toBeTruthy();

    store.commit("journal/deleteEntry", "ABC-123");

    const entriesUpdated = store.state.journal.entries;

    expect(entriesUpdated.length).toBe(2);
    expect(entriesUpdated.find((e) => e.id === "ABC-123")).toBeFalsy();
  });

  // GETTERS =================
  test("getters - getEntriesByTerm and getEntryById", () => {
    const store = createVuexStore(journalState);
    const [entry1, entry2] = journalState.entries;
    expect(store.getters["journal/getEntriesByTerm"]("").length).toBe(2);
    expect(store.getters["journal/getEntriesByTerm"]("hello").length).toBe(1);
    expect(store.getters["journal/getEntriesByTerm"]("hello")).toEqual([
      entry1,
    ]);
    expect(store.getters["journal/getEntryById"](entry2.id)).toEqual(entry2);
  });

  // Actions =================
  test("actions - loadEntries", async () => {
    const store = createVuexStore({ isLoading: true, entries: [] });

    await store.dispatch("journal/loadEntries");
    expect(store.state.journal.entries.length).toBe(2);
  });

  test("actions -updateEntry", async () => {
    const store = createVuexStore(journalState);
    const updatedEntry = {
      id: "-NT6lYa-7HVHjuCGUCmk",
      date: 1681610120104,
      text: "HELLO with image updated\n",
      picture: null,
      otroCampo: true,
    };
    await store.dispatch("journal/updateEntry", updatedEntry);
    const { entries } = store.state.journal;
    expect(entries.length).toBe(2);
    expect(entries.find((e) => e.id === updatedEntry.id)).toEqual({
      id: "-NT6lYa-7HVHjuCGUCmk",
      date: 1681610120104,
      text: "HELLO with image updated\n",
      picture: null,
    });
  });

  test("actions - createEntry and deleteEntry", async () => {
    const store = createVuexStore(journalState);

    const newEntry = {
      date: 1627077227978,
      text: "Nueva entrada desde las pruebas",
    };

    const id = await store.dispatch("journal/createEntry", newEntry);

    expect(typeof id).toBe("string");

    const { entries } = store.state.journal;
    //  expect(entries.length).toBe(3);
    expect(entries.find((e) => e.id === id)).toBeTruthy();

    await store.dispatch("journal/deleteEntry", id);

    const entriesUpdated = store.state.journal.entries;

    //  expect(entriesUpdated.length).toBe(2);
    expect(entriesUpdated.find((e) => e.id === id)).toBeFalsy();
  });
});
