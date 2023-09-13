import { FootballTeam } from "./football-team";

export interface Pageable {
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface ResponseData {
  content: FootballTeam[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  sort: Sort;
  first: boolean;
  size: number;
  number: number;
  empty: boolean;
}
