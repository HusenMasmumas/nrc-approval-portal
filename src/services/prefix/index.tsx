import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import axios, { thrownResponse } from "axios_config";
import { ICreatePrefix } from "./interface";

export const usePrefixList = (params?: any): UseQueryResult<any> => {
  return useQuery(["get-prefix", params], async () => {
    const res = await axios.get("/prefix", { params: params });

    if (res.status >= 200 && res.status < 300) {
      return res.data;
    }
    thrownResponse(res);
  });
};

export const useCreatePrefix = () => {
  return useMutation(["post-prefix"], async (data: ICreatePrefix) => {
    const res = await axios.post(`/prefix`, data);

    if (res.status >= 200 && res.status < 300) {
      return res.data.result?.[0];
    }
    thrownResponse(res);
  });
};
