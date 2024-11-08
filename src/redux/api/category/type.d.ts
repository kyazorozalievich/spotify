namespace CATEGORY {
  interface ICategories {
    categories: {
      href: string;
      limit: number;
      next: string;
      offset: number;
      previous: string;
      total: number;
      items: Array<{
        href: string;
        icons: Array<{
          url: string;
          height: number;
          width: number;
        }>;
        id: string;
        name: string;
      }>;
    };
  }

  type GetCategoriesResponse = ICategories[];
  type GetCategoriesRequest = void;

  type GetCategoryResponse = ICategory;
  type GetCategoryRequest = string;
}
