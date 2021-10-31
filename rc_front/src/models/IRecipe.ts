export interface IRecipe {
  id: number;
  title: string;
  content: string;
  category: string;
  creation_datetime: Date;
}

export interface IReply {
  count: number;
  next: string;
  previous: string;
  results: IRecipe[];
}

export interface ICategory {
  id: number;
  category: string;
}

export interface IReplyCategory {
  count: number;
  next: string;
  previous: string;
  results: ICategory[];
}
