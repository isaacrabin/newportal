export interface County {
  id: string;
  name: string;
  code: string;
  flag?: string;
  capital?: string;
}

export interface SubCounty {
  id: string;
  name: string;
}
export interface CountyPagination {
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  sort: CountySort;
  number_of_elements: number;
  total_pages: number;
  total_elements: number;
}

export interface CountySort {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
}
