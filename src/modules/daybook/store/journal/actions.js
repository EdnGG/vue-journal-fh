import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/entries.json");

  if (!data) {
    commit("setEntries", []);
    return;
  }
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
  // console.log(resp);

  entryToSave.id = payload.id;

  commit("updateEntry", { ...entryToSave });
};

export const createEntry = async ({ commit }, payload) => {
  const { date, picture, text } = payload;
  const entryToSave = { date, picture, text };

  const { data } = await journalApi.post(`/entries.json`, entryToSave);

  entryToSave.id = data.name;

  commit("addEntry", entryToSave);
  return data.name;
};

export const deleteEntry = async ({ commit }, id) => {
  await journalApi.delete(`/entries/${id}.json`);
  commit("deleteEntry", id);

  return id;
};
