import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/entries.json");
  // console.log(data);
  const entries = [];
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }
  commit("setEntries", entries);
  commit("setLoading", false);
};

export const updateEntry = async ({ commit }, payload) => {
  const { date, picture, text } = payload;
  const entryToSave = { date, picture, text };

  const resp = await journalApi.put(`/entries/${payload.id}.json`, entryToSave);
  console.log(resp);

  commit("updateEntry", { ...payload });
};

export const createEntry = async (/*{ commit }*/) => {};
