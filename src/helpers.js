export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Время ожидания ответа превышено`));
    }, s * 1000);
  });
};

export const getPageName = (location) => {
  console.log(location.hash);
  if (
    (location.pathname === '/' && location.hash === '') ||
    (location.pathname === '/test-task-66bit/' && location.hash === '#/')
  )
    return 'news';
  else if (location.pathname === '/themes' || location.hash === '#/themes')
    return 'themes';
  else return null;
};

export const formatDate = (date) => {
  date = new Date(date);
  return new Intl.DateTimeFormat('ru-RU').format(date);
};
