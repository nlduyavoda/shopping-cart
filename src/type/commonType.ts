export type pokemon = {
  id: string;
  name: string;
  number: string;
  image: string;
  quantity: number;
};

export type inputPutCardType = {
  id: string;
  card: {
    name: string;
    description: string;
  };
};

export interface cartType extends pokemon {
  quantity: number;
}

export type CardType = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type PaginationResult = {
  cards: CardType[];
  totalPage: number;
  isNext: boolean;
  isPrevous: boolean;
};

export type PaginateCards = (currentPage: number) => Promise<PaginationResult>;
