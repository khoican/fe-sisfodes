import { axiosInstance } from "#/lib/api/axios";
import type { Sdgs } from "#/types/sdgs";
import type { ApiResponse } from "#/utils/apiResponse.util";
import { queryOptions } from "@tanstack/react-query";

/**
 * Mengambil data SDGs dari API.
 * 
 * @returns {Promise<ApiResponse<Sdgs>>} Response API berisi data SDGs.
 */
export const getSdgs = async (): Promise<ApiResponse<Sdgs>> => {
  const response = await axiosInstance.get<ApiResponse<Sdgs>>('/api/sdgs')
  return response.data
}

/**
 * Query options untuk TanStack Query untuk data SDGs.
 * 
 * @returns {ReturnType<typeof queryOptions>} Query options untuk data SDGs.
 */
export const sdgsQueryOptions = () => {
  return queryOptions({
    queryKey: ['sdgs'],
    queryFn: () => getSdgs()
  })
}
