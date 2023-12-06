import {Website, WebsitesQueryResponse} from "./_models.ts";
import axios, {AxiosResponse} from "axios";
import {ID, Response} from "../../../../_metronic/helpers";
import {responsivePropType} from "react-bootstrap/createUtilityClasses";

const API_URL = import.meta.env.VITE_APP_THEME_API_URL;
const WEBSITE_URL = `${API_URL}/websites`;
const GET_WEBSITES_URL = `${API_URL}/websites`;

const getWebsites = (query: string): Promise<WebsitesQueryResponse> => {
    console.log('getWeb');
    return axios
      .get(`${GET_WEBSITES_URL}?${query}`)
      .then((d: AxiosResponse<WebsitesQueryResponse>) => d.data)
};

const getWebsiteById = (id: ID): Promise<Website | undefined> => {
    return axios
        .get(`${WEBSITE_URL}/${id}`)
        .then((response: AxiosResponse<Response<Website>>) => response.data)
        .then((response: Response<Website>) => response.data);
}

const createWebsite = (website: Website): Promise<Website | undefined> => {
    return axios
        .post(WEBSITE_URL, website)
        .then((response: AxiosResponse<Response<Website>>) => response.data)
        .then((response: Response<Website>) => response.data);
}

const updateWebsite = (website: Website): Promise<Website | undefined> => {
    return axios
        .post(`${WEBSITE_URL}/${website.id}`, website)
        .then((response: AxiosResponse<Response<Website>>) => response.data)
        .then((response: Response<Website>) => response.data);
}

const deleteWebsite = (websiteId: ID): Promise<void> => {
    return axios.delete(`${WEBSITE_URL}/${websiteId}`)
        .then(() => {});
}

const deleteSelectedWebsites = (userIds: Array<ID>): Promise<void> => {
  const request = userIds.map((id) =>
  axios.delete(`${WEBSITE_URL}/${id}`));
  return axios.all(request).then(() => {});
}

export {
    getWebsites,
    deleteWebsite,
    deleteSelectedWebsites,
    getWebsiteById,
    createWebsite,
    updateWebsite
}