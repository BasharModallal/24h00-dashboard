import { ID, Response } from '../../../../../_metronic/helpers'
export enum DealStatus {
  Pending = 0,
  Active = 1,
  Rejected = 2,
  Expired = 3,
}
export type Deal = {
  id?: ID
  name?: string
  title: string;
  description: string;
  images?: File | null,
  coupon: string;
  user_id: number;
  status: DealStatus;
  oldprice: string;
  newprice: string;
  website_id: number;
  brand_id: number;
  category_id: number;
  startdate: string;
  enddate: string;
  discount: number;
  deliveryfee: string;
  dealurl: string;
  category_details: CategoryDetails;
  brand_details: BrandDetails;
  website_details: WebsiteDetails;
  user_details: UserDetails;
  reject_reason: string;
  comments_details: any[]; // Replace 'any' with a more specific type for comments
  saves_count: number;
  views_count: number;
  comments_count: number;
  shares_count: number;
  likes_count: number;
  dislikes_count: number;
  is_liked: boolean | null;
  is_disliked: boolean | null;
  is_saved: boolean | null;
  created_at: string | null;
  updated_at: string | null;
}

interface CategoryDetails {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  images: string[];
}

interface BrandDetails {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  view_count: number;
  images: string[];
}

interface WebsiteDetails {
  id: number;
  name: string;
  url: string;
  created_at: string | null;
  updated_at: string | null;
}

interface UserDetails {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  device_id: string | null;
  fcm_token: string | null;
  email_verified_at: string | null;
  blacklisted: number;
  blacklisted_reason: string | null;
  created_at: string;
  updated_at: string;
  social_id: string | null;
  social_type: string | null;
  is_following: boolean;
  media: string[];
}

export interface DealResponse {
  id: number;
  title: string;
  description: string;
  images: string[];
  coupon: string;
  user_id: number;
  status: DealStatus;
  oldprice: string;
  newprice: string;
  website_id: number;
  brand_id: number;
  category_id: number;
  startdate: string;
  enddate: string;
  discount: number;
  deliveryfee: string;
  dealurl: string;
  category_details: CategoryDetails;
  brand_details: BrandDetails;
  website_details: WebsiteDetails;
  user_details: UserDetails;
  reject_reason: string;
  comments_details: any[]; // Replace 'any' with a more specific type for comments
  saves_count: number;
  views_count: number;
  comments_count: number;
  shares_count: number;
  likes_count: number;
  dislikes_count: number;
  is_liked: boolean | null;
  is_disliked: boolean | null;
  is_saved: boolean | null;
  created_at: string | null,
  updated_at: string | null,
}
export type DealsQueryResponse = Response<Array<DealResponse>>

export const initialDeal: Deal = {
  images: null,
  name: 'No Deal',
  title: '',
  description: '',
  coupon: '',
  user_id: 0,
  status: DealStatus.Active,
  oldprice: '',
  newprice: '',
  website_id: 0,
  brand_id: 0,
  category_id: 0,
  startdate: '',
  enddate: '',
  discount: 0,
  deliveryfee: '',
  dealurl: '',
  reject_reason: '',
  comments_details: [],
  saves_count: 0,
  views_count: 0,
  comments_count: 0,
  shares_count: 0,
  likes_count: 0,
  dislikes_count: 0,
  is_liked: null,
  is_disliked: null,
  is_saved: null,
  created_at: null,
  updated_at: null,
  category_details: {
    id: 0,
    name: '',
    created_at: '',
    updated_at: '',
    images: []
  },
  brand_details: {
    id: 0,
    name: '',
    created_at: '',
    updated_at: '',
    view_count: 0,
    images: []
  },
  website_details: {
    id: 0,
    name: '',
    url: '',
    created_at: null,
    updated_at: null
  },
  user_details: {
    id: 0,
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    device_id: null,
    fcm_token: null,
    email_verified_at: null,
    blacklisted: 0,
    blacklisted_reason: null,
    created_at: '',
    updated_at: '',
    social_id: null,
    social_type: null,
    is_following: false,
    media: []
  }
}

