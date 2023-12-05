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
  const formData = new FormData();
  formData.append('name', brand.name || ''); // Assuming brand.name is required
  formData.append('image', brand.image as Blob);

  return axios
    .post(BRANDS_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response: AxiosResponse<Response<Brand>>) => response.data)
    .then((response: Response<Brand>) => response.data);
};
const updateBrand = (brand: Brand): Promise<Brand | undefined> => {
  const isImageProvided = Boolean(brand.image);

  const requestData = isImageProvided
    ? { name: brand.name, image: brand.image as Blob }
    : { name: brand.name };

  return axios
    .post(`${BRANDS_URL}/${brand.id}`, isImageProvided ? createFormData(requestData) : requestData)
    .then((response: AxiosResponse<Response<Brand>>) => response.data)
    .then((response: Response<Brand>) => response.data);
};

const createFormData = (data: Record<string, any>): FormData => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
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
