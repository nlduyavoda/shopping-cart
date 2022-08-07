import { useMutation } from "react-query";
import { queryClient } from "../index";
import { add__card, reset__card, edit__card } from "../api";
import { Card, inputPutCard, PaginateCards } from "../type/index";
export const setQueriesData = (value: any) => {
  queryClient.setQueriesData(["get-cards"], () => value);
};
export const setQueriesData2 = (
  currentPage: any,
  cards: Card[] | undefined,
  value: any
) => {
  if (cards) {
    console.log("cards: ", [value, ...cards]);
    queryClient.setQueriesData(["paginate-cards", currentPage], () => [
      value,
      ...cards,
    ]);
  }
};

export const host = "http://localhost:8001/";

export const useCardMutation = () => {
  const { mutate: postCard } = useMutation((card: any) =>
    add__card(host, card)
  );
  const { mutate: resetCard } = useMutation((host: string) => {
    return reset__card(host);
  });
  const { mutate: putCard } = useMutation(
    ({ id, card }: { id: string; card: any }) => edit__card(host, id, card)
  );

  return {
    postCard_test: (
      currentPage: any,
      cards: Card[] | undefined,
      inputPostCard: any
    ) =>
      postCard(inputPostCard, {
        onSuccess: (res) => setQueriesData2(currentPage, cards, res),
      }),
    resetCard_test: (host: string) =>
      resetCard(host, {
        onSuccess: (res) => setQueriesData(res),
      }),
    updateCard_test: (cardData: Card[], inputPutCard: inputPutCard) => {
      return putCard(inputPutCard, {
        onSuccess: (res) => {
          return setQueriesData(JSON.parse(res));
        },
      });
    },
  };
};
