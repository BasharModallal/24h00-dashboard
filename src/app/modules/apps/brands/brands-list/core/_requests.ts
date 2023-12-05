import axios, { AxiosResponse } from "axios";
import { ID, Response } from "../../../../../../_metronic/helpers";
import { Brand, BrandsQueryResponse } from "./_models";

const API_URL = import.meta.env.VITE_APP_THEME_API_URL;
const BRANDS_URL = `${API_URL}/brands`;

const getBrands = (query: string): Promise<BrandsQueryResponse> => {
  return axios
    .get(`${BRANDS_URL}?`)
    .then((d: AxiosResponse<BrandsQueryResponse>) => d.data);
};

const getBrandById = (id: ID): Promise<Brand | undefined> => {
  return axios
    .get(`${BRANDS_URL}/${id}`)
    .then((response: AxiosResponse<Response<Brand>>) => response.data)
    .then((response: Response<Brand>) => response.data);
};

const createBrand = (brand: Brand): Promise<Brand | undefined> => {
  return axios
    .put(BRANDS_URL, brand)
    .then((response: AxiosResponse<Response<Brand>>) => response.data)
    .then((response: Response<Brand>) => response.data);
};

const updateBrand = (brand: Brand): Promise<Brand | undefined> => {
  return axios
    .post(`${BRANDS_URL}/${brand.id}`, brand)
    .then((response: AxiosResponse<Response<Brand>>) => response.data)
    .then((response: Response<Brand>) => response.data);
};

const deleteBrand = (brandId: ID): Promise<void> => {
  return axios.delete(`${BRANDS_URL}/${brandId}`).then(() => { });
};

const deleteSelectedBrands = (brandIds: Array<ID>): Promise<void> => {
  const requests = brandIds.map((id) => axios.delete(`${BRANDS_URL}/${id}`));
  return axios.all(requests).then(() => { });
};

export {
  getBrands,
  deleteBrand,
  deleteSelectedBrands,
  getBrandById,
  createBrand,
  updateBrand,
};
