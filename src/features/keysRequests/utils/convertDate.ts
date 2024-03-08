export const convertDate = (date: Date) => {
  const day = addUnnecessaryZero(date.getDate());
  const year = date.getFullYear();
  const month = addUnnecessaryZero(date.getMonth() + 1);
  const hours = addUnnecessaryZero(date.getHours());
  const minutes = addUnnecessaryZero(date.getMinutes());
  return `${day}.${month}.${year} ${hours}:${minutes}`;
};

export const convertToLocaleDate = (value: string) => {
  console.log(new Date(value.replace('Z', '')).toISOString());
  return new Date(value.replace('Z', ''));
};

export const convertTimeZoneToUTC = (value: string) => {
  const localDate = new Date(value);
  const utcString = localDate.toUTCString();
  return new Date(utcString).toISOString();
};

const addUnnecessaryZero = (value: number) => {
  return value < 10 ? `0${value}` : value;
};
