import axios, { AxiosResponse } from "axios";
import { ID, Response } from "../../../../../_metronic/helpers";
import { Deal, DealsQueryResponse } from "./_models";

const API_URL = import.meta.env.VITE_APP_THEME_API_URL;
const DEALS_URL = `${API_URL}/deals`;

const getDeals = (query: string): Promise<DealsQueryResponse> => {
  return axios
    .get(`${DEALS_URL}?`)
    .then((d: AxiosResponse<DealsQueryResponse>) => d.data);
};

const getDealById = (id: ID): Promise<Deal | undefined> => {
  return axios
    .get(`${DEALS_URL}/${id}`)
    .then((response: AxiosResponse<Response<Deal>>) => response.data)
    .then((response: Response<Deal>) => response.data);
};

const createDeal = (brand: Deal): Promise<Deal | undefined> => {
  const formData = new FormData();
  formData.append('name', brand.name || ''); // Assuming brand.name is required
  formData.append('image', brand.image as Blob);

  return axios
    .post(DEALS_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response: AxiosResponse<Response<Deal>>) => response.data)
    .then((response: Response<Deal>) => response.data);
};
const updateDeal = (brand: Deal): Promise<Deal | undefined> => {
  const isImageProvided = Boolean(brand.image);

  const requestData = isImageProvided
    ? { name: brand.name, image: brand.image as Blob }
    : { name: brand.name };

  return axios
    .post(`${DEALS_URL}/${brand.id}`, isImageProvided ? createFormData(requestData) : requestData)
    .then((response: AxiosResponse<Response<Deal>>) => response.data)
    .then((response: Response<Deal>) => response.data);
};

const createFormData = (data: Record<string, any>): FormData => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
};


const deleteDeal = (brandId: ID): Promise<void> => {
  return axios.delete(`${DEALS_URL}/${brandId}`).then(() => { });
};

const deleteSelectedDeals = (brandIds: Array<ID>): Promise<void> => {
  const requests = brandIds.map((id) => axios.delete(`${DEALS_URL}/${id}`));
  return axios.all(requests).then(() => { });
};

export {
  getDeals,
  deleteDeal,
  deleteSelectedDeals,
  getDealById,
  createDeal,
  updateDeal,
};
