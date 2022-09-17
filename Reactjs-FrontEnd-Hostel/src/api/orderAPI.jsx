import axios from "axios";
import axiosClient from "./axiosClient";

const orderAPI = {
// <<<<<<< HEAD
//   createOrder: (fullName, email, phone, paymentMethod, room_Id, totalPrice) => {
//     const url = "/functions/addBill";
// =======
  createOrder: (fullName, email, phone, paymentMethod, room_Id, user_Id) => {
    const url = "/functions/addBill";
// >>>>>>> 573b49d6f89cf9167fbf4921f9d7dedd7bb9adf4
    return axiosClient.post(url, {
      fullName,
      email,
      phone,
      paymentMethod,
// <<<<<<< HEAD
//       room_Id,
//       totalPrice,
// =======
      room_Id,
      user_Id,
// >>>>>>> 573b49d6f89cf9167fbf4921f9d7dedd7bb9adf4
    });
  },

  //id of a house
  getOrder: (objectId) => {
// <<<<<<< HEAD
//     const url = `/classes/Bill/?include=room_Id.rentHouse_Id.categoryId/room_id=${objectId}`;
//     //localhost:1337/parse/classes/Order/?include=room_id.parent.CategoryId/room_id=kCQzQKzAps
//     return axiosClient.get(url);
//   },
// };

// export default orderAPI;
// =======
    const url = `/functions/getBill?room_Id=${objectId}`;
    return axiosClient.post(url);
  },
  getOrdersMine: (user_Id) => {
    const url = `/classes/Bill?include=room_Id.rentHouse_Id,user_Id.objectId=${user_Id}`;
    return axiosClient.get(url);
  },
};
export default orderAPI;
// >>>>>>> 573b49d6f89cf9167fbf4921f9d7dedd7bb9adf4
