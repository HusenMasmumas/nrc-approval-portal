import { useMutation } from "@tanstack/react-query";
import axios, { thrownResponse } from "axios_config";
import { IUserLogin } from "./interface";

export const useLogin = () => {
  return useMutation(["post-login"], async (data: IUserLogin) => {
    const res = await axios.post(`/auth/login`, data);

    if (res.status >= 200 && res.status < 300) {
      return res.data.result?.[0];
    }
    thrownResponse(res);
  });
};
