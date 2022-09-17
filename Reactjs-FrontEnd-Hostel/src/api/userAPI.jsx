import axiosClient from "./axiosClient";

const userAPI = {
  create: (username, password, email, phone) => {
    const url = "/functions/signup";
    return axiosClient.post(url, { username, password, email, phone });
  },
  login: (username, password) => {
    const url = "/functions/login";
    return axiosClient.post(url, { username, password });
  },
// <<<<<<< HEAD
  // createOrder: (username, email, phone, room_Id) => {
  //   const url = "/functions/addBill";
  //   return axiosClient.post(url, { username, email, phone, room_Id});
  // },
// =======
  updateUser: (objectId, username, email, password) => {
    const url = "/functions/updateUserById";
    return axiosClient.post(url, { objectId, username, email, password });
  },
// >>>>>>> 573b49d6f89cf9167fbf4921f9d7dedd7bb9adf4
};

export default userAPI;
