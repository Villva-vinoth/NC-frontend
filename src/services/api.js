export const BASE_URL = `http://192.168.29.174:3001/api/`;

export const ADD_USER = BASE_URL +`users/register`;

export const LOGIN = BASE_URL +`users/login`;

//token 
// users details 
export const GET_USER = BASE_URL +`users/getUserDetailById`; 
export const GET_USER_PASSWORD = BASE_URL +`users/getUserPasswordById`; 
export const GET_ALL_USER = BASE_URL +`users/getUserDetails`;
export const UPDATE_USER = BASE_URL +`users/updateUserDetailById`;
export const DELETE_USER = BASE_URL +`users/deleteUserDetailById`; 
export const UPDATE_ADMIN_PASSWORD = BASE_URL +`users/updateAdminPasswordById`;
export const UPDATE_ADMIN_DETAIL = BASE_URL +`users/updatePersonalDetailById`;

export const GET_MARKETING_DATA_ADMIN = BASE_URL +`marketData/getAdminDataDetails`;
export const DELETE_MARKETING_DATA_ADMIN = BASE_URL +`marketData/deleteAdminDataDetailById`;
export const UPDATE_MARKETING_DATA_ADMIN = BASE_URL +`marketData/updateAdminDataDetailById`;
export const GET_TELECOM_MARKET_DATA =  BASE_URL +`marketData/getTelecomDetailById`;

export const ADD_MARKET_DATA = BASE_URL +`marketData/createMarketData`;
export const UPDATE_MARKET_DATA =BASE_URL+`marketData/updateTelecomDataDetailById`;



// verify user

export const VERIFY_USER=BASE_URL+`users/checkToken`;