export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const setLoading = (state, isLoading) => {
  state.isLoading = isLoading;
};

export const updateEntry = (state, payload) => {
  const index = state.entries.map((entry) => entry.id).indexOf(payload.id);
  state.entries[index] = payload;
};

export const addEntry = (state, payload) => {
  // new entry must be the first one
  // state.entries.unshift(payload);
  state.entries = [payload, ...state.entries];
};

export const deleteEntry = (state, id) => {
  state.entries = state.entries.filter((entry) => entry.id !== id);
};
