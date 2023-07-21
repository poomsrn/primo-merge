import { merge } from "./merge";

describe("merge", () => {
  it("should merge two sorted arrays correctly", () => {
    const collection1 = [1, 2, 4, 8, 11, 17, 19, 26];
    const collection2 = [3, 6, 7, 9, 10, 18, 20, 25];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([
      1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 17, 18, 19, 20, 25, 26,
    ]);
  });

  it("should merge two sorted array with collection1 is empty arrays correctly", () => {
    const collection1: number[] = [];
    const collection2 = [1, 2, 4, 6];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 4, 6]);
  });

  it("should merge two sorted array with collection2 is empty arrays correctly", () => {
    const collection1 = [1, 2, 4, 6];
    const collection2: number[] = [];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 4, 6]);
  });

  it("should merge two sorted arrays with different lengths correctly", () => {
    const collection1 = [1, 3, 7, 11, 17];
    const collection2 = [2, 6, 19];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 6, 7, 11, 17, 19]);
  });

  it("should merge two sorted arrays with duplicate elements correctly", () => {
    const collection1 = [1, 2, 5, 5, 7];
    const collection2 = [3, 4, 5, 11];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 5, 5, 7, 11]);
  });
});
