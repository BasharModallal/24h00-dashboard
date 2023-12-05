import { ID, Response } from '../../../../../../_metronic/helpers'
export type Brand = {
  id?: ID
  name?: string
  images?: [string]
  created_at?: string
  updated_at?: string
  view_count?: number

}

export type BrandsQueryResponse = Response<Array<Brand>>

export const initialBrand: Brand = {
  images: ['avatars/300-6.jpg'],
  name: 'No Brand',
  created_at: "2023-09-21T06:52:25.000000Z",
  updated_at: "2023-09-21T06:52:25.000000Z",
  view_count: 1
}
