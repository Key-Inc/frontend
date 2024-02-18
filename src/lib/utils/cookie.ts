export const getCookieByName = (name: string) => {
  const cookies = document.cookie.split(';');
  const cookie = cookies.find((value) => {
    const valueName = value.trim().split('=')[0];
    return valueName === name;
  });

  return cookie?.split('=')[1];
};
