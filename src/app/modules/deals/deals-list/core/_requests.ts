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

const createDeal = (deal: Deal): Promise<Deal | undefined> => {
  const formData = new FormData();
  formData.append('name', deal.name || ''); // Assuming deal.name is required
  formData.append('image', deal.images as Blob);

  return axios
    .post(DEALS_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response: AxiosResponse<Response<Deal>>) => response.data)
    .then((response: Response<Deal>) => response.data);
};
const updateDeal = (deal: Deal): Promise<Deal | undefined> => {
  const isImageProvided = Boolean(deal.images);

  const requestData = isImageProvided
    ? { name: deal.name, image: deal.images as Blob }
    : { name: deal.name };

  return axios
    .post(`${DEALS_URL}/${deal.id}`, isImageProvided ? createFormData(requestData) : requestData)
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


const deleteDeal = (dealId: ID): Promise<void> => {
  return axios.delete(`${DEALS_URL}/${dealId}`).then(() => { });
};

const deleteSelectedDeals = (dealIds: Array<ID>): Promise<void> => {
  const requests = dealIds.map((id) => axios.delete(`${DEALS_URL}/${id}`));
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
