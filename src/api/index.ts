export const add__card = async (url: string, card: any) => {
  const data = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      card: card,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(async (response) => response.json())
    .then((json) => json);

  return data;
};

export const reset__card = async (url: string) => {
  const data = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      status: "RESET THE WORLD",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => json);
  return data;
};

export const edit__card = async (url: string, id: number, card: any) => {
  const data = await fetch(`${url}${id}`, {
    method: "PUT",
    body: JSON.stringify({
      card: card,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      try {
        return response.json();
      } catch (error) {
        console.log("error :>> ", error);
      }
    })
    .then((json) => {
      return json;
    });
  return data;
};
