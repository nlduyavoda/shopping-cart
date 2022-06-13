export const updater = (card: any, data: any) => {
  return card;
};
export const handleCheck = (currentPage: number, list: number) => {
  if (currentPage === 1) {
    return [currentPage, currentPage + 1, currentPage + 2];
  }
  if (currentPage === list) {
    return [list - 2, list - 1, list];
  } else {
    return [currentPage - 1, currentPage, currentPage + 1];
  }
};
