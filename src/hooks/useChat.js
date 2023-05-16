import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecive } from "../store/chatSlice";

const useChat = () => {
  const { messages, caller, lastId } = useSelector((state) => state.chat);
  const { idInstance, apiToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (caller && lastId) {
      dispatch(fetchRecive({ idInstance, apiToken, id: lastId }));
    }
  }, [dispatch, idInstance, apiToken, lastId, caller]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!lastId) {
        dispatch(fetchRecive({ idInstance, apiToken, id: lastId }));
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [dispatch, idInstance, apiToken, lastId]);

  return messages;
};

export default useChat;
