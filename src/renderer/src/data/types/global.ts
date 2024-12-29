export interface SimpleData {
  id: number;
  name: string;
}

export interface ResponseBody<T extends object | undefined> {
  code: number;
  msg: string;
  data: T;
}

export interface ListData<T> {
  list: T[];
}

export interface PageBody<T> {
  total: number;
  pages: T[];
}
