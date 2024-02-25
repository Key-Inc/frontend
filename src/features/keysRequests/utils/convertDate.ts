export const convertDate = (date: Date) => {
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${day}.${month}.${year} ${hours}:${minutes}`;
};
