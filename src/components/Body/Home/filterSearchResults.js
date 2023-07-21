export const filterSearchResults = (data, sreachTerm) => {
  const results = data.filter((value) => {
    return value.tags.some((tag) => tag.includes(sreachTerm));
  });

  return results;
};
