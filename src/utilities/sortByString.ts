let direction: string = "desc";

export const sortByString = (arr: any[], sortField: any) => {
  let sortedData = [...arr];
  if (direction === "asc") {
    direction = "desc";
    sortedData.sort((a, b): any => {
      if (b[sortField].toLowerCase() > a[sortField].toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
  } else if (direction === "desc") {
    direction = "asc";
    sortedData.sort((a, b): any => {
      if (b[sortField].toLowerCase() < a[sortField].toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  return { sortedData, direction, sortField };
};
