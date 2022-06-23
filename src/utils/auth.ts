const onRouterBefore = () => {
  const loggedIn = window.localStorage.getItem('loggedIn');
  return loggedIn ? true : false;
};

export default { onRouterBefore };
