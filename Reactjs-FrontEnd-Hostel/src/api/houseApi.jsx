import axiosClient from "./axiosClient";

// api/productApi.js
const houseApi = {
  // getAll: (params) => {
  //   const url = "/classes/RentHouse?include=CategoryId";
  //   return axiosClient.get(url, { params });
  // },
  getAll: () => {
    const url = "/classes/RentHouse?include=category_Id";
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  getRoomById: (objectId) => {
// <<<<<<< HEAD
    const url = `/classes/Room/${objectId}/?include=rentHouse_Id.category_Id`;
    
    return axiosClient.get(url);
  },
  getAllRoom: () => {
    const url = "/classes/Room?include=rentHouse_Id.category_Id";
// =======
    // const url = `/classes/Room/${objectId}/?include=parent,cate`;

    return axiosClient.get(url);
  },
  getAllRoom: () => {
    const url = "/classes/Room?include=rentHouse_Id.category_Id";
    return axiosClient.get(url);
  },
  getCate: () => {
    const url = "/classes/Category";
// >>>>>>> 573b49d6f89cf9167fbf4921f9d7dedd7bb9adf4
    return axiosClient.get(url);
  },
  getRoomByCate: (categoryId) => {

    const url = `/functions/get-room-cate/?category_Id=${categoryId}`;
    return axiosClient.post(url);
  },
};

export default houseApi;
