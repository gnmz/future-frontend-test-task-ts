

export const sortByNumber = (arr: any[], sortField: any) => {
  let direction: string = "desc";
  let sortedData = [...arr];
  if (direction === "asc") {
    direction = "desc";
    sortedData.sort((a, b) => b[sortField] - a[sortField]);
  }
  else if (direction === "desc") {
    direction = "asc";
    sortedData.sort((a, b) => a[sortField] - b[sortField]);
  }
  
  return {sortedData, direction, sortField}
};
