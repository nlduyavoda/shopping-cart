export type pokemon = {
  id: string;
  name: string;
  number: string;
  image: string;
  quantity: number;
};

export type inputPutCard = {
  id: string;
  card: {
    name: string;
    description: string;
  };
};
export interface cartType extends pokemon {
  quantity: number;
}

export const action = {
  INCREASE: "INCREASE",
  REDUCE: "REDUCE",
};

export type Card = {
  id: string;
  name: string;
  description: string;
  image: string;
} | null;

export type PaginationResult = {
  cards: Card[];
  totalPage: number;
  isNext: boolean;
  isPrevous: boolean;
};

export type PaginateCards = (currentPage: number) => Promise<PaginationResult>;
