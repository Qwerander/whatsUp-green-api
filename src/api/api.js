import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.green-api.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const Api = {
  send: async (user, text, idInstance, apiToken) => {
    await instance.post(`/waInstance${idInstance}/sendMessage/${apiToken}`, {
      chatId: user,
      message: text,
    });
  },
  recive: async (idInstance, apiToken) => {
    const res = await instance.get(
      `/waInstance${idInstance}/receiveNotification/${apiToken}`
    );
    return await res.data;
  },
  delete: async (idInstance, apiToken, id) => {
    await instance.delete(
      `/waInstance${idInstance}/deleteNotification/${apiToken}/${id}`
    );
  },
  settings: async (idInstance, apiToken) => {
    const res = await instance.get(
      `/waInstance${idInstance}/GetSettings/${apiToken}`
    );
    return await res.data;
  },
};
