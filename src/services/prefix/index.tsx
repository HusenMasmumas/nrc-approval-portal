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

export const useGetByIdPrefix = (
  enabled: boolean,
  id?: number | null
): UseQueryResult<any> => {
  return useQuery(
    ["get-prefix", id],
    async () => {
      const res = await axios.get(`/prefix/${id}`);

      if (res.status >= 200 && res.status < 300) {
        return res.data;
      }
      thrownResponse(res);
    },
    {
      enabled: enabled,
    }
  );
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

export const useDeletePrefix = () => {
  return useMutation(
    ["delete-prefix"],
    async (id: number | null | undefined) => {
      const res = await axios.delete(`/prefix/${id}`);

      if (res.status >= 200 && res.status < 300) {
        return res.data.result?.[0];
      }
      thrownResponse(res);
    }
  );
};

export const useUpdatePrefix = () => {
  return useMutation(["put-prefix"], async ({ data, id }: any) => {
    const res = await axios.put(`/prefix/${id}`, data);

    if (res.status >= 200 && res.status < 300) {
      return res.data.result?.[0];
    }
    thrownResponse(res);
  });
};

export const useCreateFile = () => {
  return useMutation(["post-file"], async (data: any) => {
    const res = await axios.post(`/media-object/media`, data);

    if (res.status >= 200 && res.status < 300) {
      return res.data.result?.[0];
    }
    thrownResponse(res);
  });
};
