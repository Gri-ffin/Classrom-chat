export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Help with user authentication
export const loginHelper = async (setLoading, setError, loginFunc, router) => {
  try {
    setLoading(true);
    setError('');
    await loginFunc();
    router.push('/chat');
  } catch (e) {
    setError(e.code.split('/')[1]);
  }
  setLoading(false);
};
