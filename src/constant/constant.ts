import { PaginateCards } from "../type";

export const host = "http://localhost:8001/";

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

export const addCard = async (url: string, card: any) => {
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

export const edit__card = async (url: string, id: string, card: any) => {
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

export const fetchAPI = () => {
  const data = fetch(host)
    .then((res) => res.json())
    .then((res) => res);
  return data;
};

export const paginateAPI: PaginateCards = async (currentPage: any) => {
  const data = await fetch(`${host}${currentPage}`)
    .then((res) => res.json())
    .then((res) => res);
  return data;
};
