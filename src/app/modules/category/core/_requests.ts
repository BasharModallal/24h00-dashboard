import axios, { AxiosResponse } from "axios";
import { ID, Response } from "../../../../_metronic/helpers";
import { Category, CategoriesQueryResponse } from "./_models";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const CATEGORY_URL = `${API_URL}/categories`;

const createCategory = (category: Category): Promise<Category | undefined> => {
  return axios
    .put(CATEGORY_URL, category)
    .then((response: AxiosResponse<Response<Category>>) => response.data)
    .then((response: Response<Category>) => response.data);
};

const getCategories = (query: string): Promise<CategoriesQueryResponse> => {
  return axios
    .get(`${CATEGORY_URL}?${query}`)
    .then((d: AxiosResponse<CategoriesQueryResponse>) => d.data);
};

const updateCategories = (user: Category): Promise<Category | undefined> => {
  return axios
    .post(`${CATEGORY_URL}/${user.id}`, user)
    .then((response: AxiosResponse<Response<Category>>) => response.data)
    .then((response: Response<Category>) => response.data);
};

const deleteCategories = (userId: ID): Promise<void> => {
  return axios.delete(`${CATEGORY_URL}/${userId}`).then(() => {});
};


const getCategoryById = (id: ID): Promise<Category | undefined> => {
  return axios
    .get(`${CATEGORY_URL}/${id}`)
    .then((response: AxiosResponse<Response<Category>>) => response.data)
    .then((response: Response<Category>) => response.data);
};
export {
  getCategoryById,
  createCategory,
  getCategories,
  updateCategories,
  deleteCategories,
};