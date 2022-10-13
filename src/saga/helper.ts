export const getPosts = async () => {
  try {
    return await fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((res) => res);
  } catch (error) {
    console.log("fetch fail");
  }
};

export const fakeCallApi = async (props: any) => {
  const apiCallingPromise = new Promise((resolve) => {
    resolve(props);
  });

  const promiseRes = await apiCallingPromise.then(async (res) => {
    const logger_responsed = await logger(res);
    return logger_responsed;
  });
  console.log("[API IS CALLED]");
  return promiseRes;
};

export const logger = async (result: any) => {
  return result;
};
