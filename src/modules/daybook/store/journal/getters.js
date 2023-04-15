export const getEntriesByTerm =
  (state) =>
  (term = "") => {
    if (term.length === 0) {
      return state.entries;
    }
    return state.entries.filter((entry) => {
      return entry.text.toLowerCase().includes(term.toLowerCase());
    });
  };

export const getEntryById =
  (state) =>
  (arg = "") => {
    const entry = state.entries.find((entry) => entry.id === arg);
    if (!entry) return;
    return { ...entry };
  };
