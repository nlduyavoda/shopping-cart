import { useMutation } from "react-query";
import { queryClient } from "../index";
import { add__card, reset__card, edit__card } from "../api";
import { Card, inputPutCard } from "../type/index";
export const setQueriesData = (value: any) => {
  queryClient.setQueriesData(["get-cards"], () => value);
};

export const host = "http://localhost:8000/";

export const useCardMutation = () => {
  const { mutate: postCard } = useMutation((card: any) =>
    add__card(host, card)
  );
  const { mutate: resetCard } = useMutation((host: string) => {
    return reset__card(host);
  });
  const { mutate: putCard } = useMutation(
    ({ id, card }: { id: number; card: any }) => edit__card(host, id, card)
  );

  return {
    postCard_test: (inputPostCard: any) =>
      postCard(inputPostCard, {
        onSuccess: (res) => setQueriesData(res),
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
