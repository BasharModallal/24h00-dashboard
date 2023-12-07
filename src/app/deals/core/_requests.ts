import axios, { AxiosResponse } from "axios";
import { ID, Response } from "../../../_metronic/helpers";
import { Deal, DealsQueryResponse } from "./_models";

const API_URL = import.meta.env.VITE_APP_THEME_API_URL;
export const DEAL_URL = `${API_URL}/deals`;

const USER_URL = `${API_URL}/deals`;
const GET_USERS_URL = `${API_URL}/users/query`;

const getDeals = (query: string): Promise<DealsQueryResponse> => {
  return axios
    .get(`${DEAL_URL}?${query}`)
    .then((d: AxiosResponse<DealsQueryResponse>) => d.data);
};

const getUserById = (id: ID): Promise<Deal | undefined> => {
  return axios
    .get(`${USER_URL}/${id}`)
    .then((response: AxiosResponse<Response<Deal>>) => response.data)
    .then((response: Response<Deal>) => response.data);
};

const createUser = (user: Deal): Promise<Deal | undefined> => {
  return axios
    .post(DEAL_URL, user)
    .then((response: AxiosResponse<Response<Deal>>) => response.data)
    .then((response: Response<Deal>) => response.data);
};

const updateUser = (user: Deal): Promise<Deal | undefined> => {
  return axios
    .post(`${USER_URL}/${user.id}`, user)
    .then((response: AxiosResponse<Response<Deal>>) => response.data)
    .then((response: Response<Deal>) => response.data);
};

const deleteCategories = (userId: ID): Promise<void> => {
  return axios.delete(`${USER_URL}/${userId}`).then(() => {});
};

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`));
  return axios.all(requests).then(() => {});
};

export {
  getDeals,
  deleteCategories,
  deleteSelectedUsers,
  getUserById,
  createUser,
  updateUser,
};
