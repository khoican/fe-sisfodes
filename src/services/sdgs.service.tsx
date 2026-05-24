import { ENDPOINTS } from '#/constant/endpoint.constant'
import { queryKeys } from '#/constant/queryKeys'
import { api } from '#/lib/api/axios'
import type { ISdgs } from '#/types/ISdgs'
import { queryOptions } from '@tanstack/react-query'

/**
 * Mengambil data SDGs dari API.
 *
 * @returns {Promise<ISdgs>} Response API berisi data SDGs.
 */
export const getSdgs = async (): Promise<ISdgs> => {
    const response = await api.get<ISdgs>(ENDPOINTS.sdgs)
    return response.metadata
}

/**
 * Query options untuk TanStack Query untuk data SDGs.
 *
 * @returns {ReturnType<typeof queryOptions>} Query options untuk data SDGs.
 */
export const sdgsQueryOptions = () => {
    return queryOptions({
        queryKey: queryKeys.sdgs(),
        queryFn: () => getSdgs(),
    })
}
