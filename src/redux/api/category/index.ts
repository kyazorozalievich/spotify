import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<
      CATEGORY.GetCategoriesResponse,
      CATEGORY.GetCategoriesRequest
    >({
      query: () => ({
        url: "/browse/categories",
        method: "GET",
      }),
    }),
    getCategory: build.query<
      CATEGORY.GetCategoryResponse,
      CATEGORY.GetCategoryRequest
    >({
      query: (category_id) => ({
        url: `/browse/categories/${category_id}
`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryQuery } = api;
