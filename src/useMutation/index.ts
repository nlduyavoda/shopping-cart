import { addCard, edit__card, host, reset__card } from "constant";
import { useMutation } from "react-query";
import { CardType, inputPutCardType } from "type";

import { queryClient } from "../index";
export const setQueriesData = (value: any) => {
  queryClient.setQueriesData(["get-cards"], () => value);
};
export const setQueriesData2 = (
  currentPage: any,
  cards: CardType[] | undefined,
  value: any
) => {
  if (cards) {
    queryClient.setQueriesData(["paginate-cards", currentPage], () => [
      value,
      ...cards,
    ]);
  }
};

export const useCardMutation = () => {
  const { mutate: postCard } = useMutation((card: any) => addCard(host, card));
  const { mutate: resetCard } = useMutation((host: string) => {
    return reset__card(host);
  });
  const { mutate: putCard } = useMutation(
    ({ id, card }: { id: string; card: any }) => edit__card(host, id, card)
  );

  return {
    postCard_test: (
      currentPage: any,
      cards: CardType[] | undefined,
      inputPostCard: any
    ) =>
      postCard(inputPostCard, {
        onSuccess: (res) => setQueriesData2(currentPage, cards, res),
      }),
    resetCard_test: (host: string) =>
      resetCard(host, {
        onSuccess: (res) => setQueriesData(res),
      }),
    updateCard_test: (cardData: CardType[], inputPutCard: inputPutCardType) => {
      return putCard(inputPutCard, {
        onSuccess: (res: any) => {
          return setQueriesData(JSON.parse(res));
        },
      });
    },
  };
};
