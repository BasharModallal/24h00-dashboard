import {ID, Response} from "../../../../_metronic/helpers";

export type Website = {
    id?: ID
    name?: string
    url?: string
}

export type WebsitesQueryResponse = Response<Array<Website>>

export const initialWebsite: Website = {
    name: '',
    url: '',
}