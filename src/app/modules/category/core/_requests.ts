import axios, { AxiosResponse } from "axios";
import { ID, Response } from "../../../../_metronic/helpers";
import { Category, CategoriesQueryResponse } from "./_models";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const CATEGORY_URL = `${API_URL}/categories`;

const createCategory = (category: Category): Promise<Category | undefined> => {

  const formData = new FormData();
  formData.append('name', category.name || ''); // Assuming brand.name is required
  formData.append('image', category.image as Blob);

  return axios
    .post(CATEGORY_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response: AxiosResponse<Response<Category>>) => response.data)
    .then((response: Response<Category>) => response.data);
};

const getCategories = (query: string): Promise<CategoriesQueryResponse> => {
  return axios
    .get(`${CATEGORY_URL}?${query}`)
    .then((d: AxiosResponse<CategoriesQueryResponse>) => d.data);
};

const updateCategories = (category: Category): Promise<Category | undefined> => {
  const isImageProvided = Boolean(category.image);
  const requestData = isImageProvided
  ? { name: category.name, image: category.image as Blob }
  : { name: category.name };

  return axios
    .post(`${CATEGORY_URL}/${category.id}`, isImageProvided ? createFormData(requestData) : requestData )
    .then((response: AxiosResponse<Response<Category>>) => response.data)
    .then((response: Response<Category>) => response.data);
};

const createFormData = (data: Record<string, any>): FormData => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
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