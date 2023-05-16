import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../api/api";

export const fetchSend = createAsyncThunk("chat/fetchSend", async (data) => {
  try {
    await Api.send(data.user, data.text, data.idInstance, data.apiToken);
  } catch (error) {
    console.error("Ошибка:", error);
  }
});

export const fetchRecive = createAsyncThunk(
  "chat/fetchRecive",
  async (data) => {
    try {
      const response = await Api.recive(
        data.idInstance,
        data.apiToken,
        data.id
      );
      if (response !== null && data.id) {
        await Api.delete(data.idInstance, data.apiToken, data.id);
      }
      return response;
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }
);

const initialState = {
  phone: "",
  caller: "",
  lastId: null,
  messages: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setCaller: (state, action) => {
      state.phone = action.payload.phone;
      state.caller = action.payload.phone + "@c.us";
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload.message);
    },
    clearChat: (state) => {
      state.messages = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecive.fulfilled, (state, action) => {
      if (
        action.payload &&
        (action.payload.receiptId !== state.lastId || !state.lastId)
      ) {
        state.lastId = action.payload.receiptId;
        if (action.payload.body?.messageData?.textMessageData?.textMessage) {
          state.messages.push({
            text: action.payload.body?.messageData?.textMessageData
              ?.textMessage,
            type: "in",
          });
        }
      } else {
        state.lastId = null;
      }
    });
  },
});

export const { setCaller, addMessage, clearChat } = chatSlice.actions;

export default chatSlice.reducer;
