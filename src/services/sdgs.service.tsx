import { ENDPOINTS } from "#/constant/endpoint.constant";
import { api } from "#/lib/api/axios";
import type { Sdgs } from "#/types/sdgs";
import { queryOptions } from "@tanstack/react-query";

/**
 * Mengambil data SDGs dari API.
 * 
 * @returns {Promise<Sdgs>} Response API berisi data SDGs.
 */
export const getSdgs = async (): Promise<Sdgs> => {
  const response = await api.get<Sdgs>(ENDPOINTS.sdgs)
  return response.response
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
