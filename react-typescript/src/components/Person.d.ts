interface Person {
  name: string;
  age: number;
}

interface Pagination<T> {
  page: number;
  pageSize: number;
  data: T[];
}

function paginate<T>(
  data: T[],
  pageSize: number,
  pageNumber: number
): Pagination<T> {
  return {
    page: pageNumber,
    pageSize: pageSize,
    data: data,
  };
}

const PaginatedData: Pagination<Person> = paginate<Person>(
  [
    { name: "Bruce", age: 25 },
    { name: "Clark", age: 30 },],
  5,
  2
);

