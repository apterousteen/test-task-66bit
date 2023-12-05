export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Время ожидания превышено`));
    }, s * 1000);
  });
};

export const getPageName = (pathname) => {
  if (pathname === '/') return 'news';
  else if (pathname === '/themes') return 'themes';
  else return null;
};

export const formatDate = (date) => {
  date = new Date(date);
  return new Intl.DateTimeFormat('ru-RU').format(date);
};
