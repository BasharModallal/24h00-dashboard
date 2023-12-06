import axios, { AxiosResponse } from "axios";
import { ID, Response } from "../../../../_metronic/helpers";
import { Category, CategoriesQueryResponse } from "./_models";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const CATEGORY_URL = `${API_URL}/categories`;

const createCategory = (category: Category): Promise<Category | undefined> => {
  return axios
    .post(CATEGORY_URL, category)
    .then((response: AxiosResponse<Response<Category>>) => response.data)
    .then((response: Response<Category>) => response.data);
};

const getCategories = (query: string): Promise<CategoriesQueryResponse> => {
  return axios
    .get(`${CATEGORY_URL}?${query}`)
    .then((d: AxiosResponse<CategoriesQueryResponse>) => d.data);
};

const updateCategories = (category: Category): Promise<Category | undefined> => {
  return axios
    .post(`${CATEGORY_URL}/${category.id}`, category)
    .then((response: AxiosResponse<Response<Category>>) => response.data)
    .then((response: Response<Category>) => response.data);
};

const deleteCategories = (categoryId: ID): Promise<void> => {
  return axios.delete(`${CATEGORY_URL}/${categoryId}`).then(() => {});
};


const getCategoryById = (id: ID): Promise<Category | undefined> => {
  return axios
    .get(`${CATEGORY_URL}/${id}`)
    .then((response: AxiosResponse<Response<Category>>) => response.data)
    .then((response: Response<Category>) => response.data);
};

const deleteSelectedCategories = (userIds: Array<ID>): Promise<void> => {
  const request = userIds.map((id) =>
  axios.delete(`${CATEGORY_URL}/${id}`));
  return axios.all(request).then(() => {});
}
export {
  getCategoryById,
  createCategory,
  getCategories,
  deleteSelectedCategories,
  updateCategories,
  deleteCategories,
};