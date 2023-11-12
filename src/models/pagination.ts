export interface PaginatedResponse<T> {
  count: number;
  next: boolean | null;
  previous: boolean | null;
  results: T[];
}

export interface PaginationParams {
  page: number;
  perPage: number;
}

export interface CandidatesByCriteriaParams extends PaginationParams {
  queryParams: string;
}
