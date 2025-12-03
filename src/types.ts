export interface AuthMeResponse {
  data: {
    id: number;
    email: string;
    login: string;
  };
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
}

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: string;
}

export interface LoginResponse {
  resultCode: number;
  messages: string[];
  data: {
    userId: number;
  };
}

export interface GetUsersParams {
  page?: number;
  count?: number;
}

export interface User {
  id: number;
  name: string;
  status: string | null;
  photos: {
    small: string | null;
    large: string | null;
  };
  followed: boolean;
}

export interface GetUsersResponse {
  items: User[];
  totalCount: number;
  error: string | null;
}

export interface FollowResponse {
  resultCode: number;
  messages: string[];
  data: {};
}

export interface UnfollowResponse {
  resultCode: number;
  messages: string[];
  data: {};
}

export interface ProfileResponse {
  aboutMe: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string;
  };
}
