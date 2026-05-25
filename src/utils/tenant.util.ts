import { VILLAGES_CONFIG, type IVillageConfig } from '#/constant/village.constant'

/**
 * @description Resolves the active village configuration based on the hostname.
 * If the hostname is not found in any registered configuration, it falls back to the main village (Sumberkejayan) configuration.
 * @param {string} hostname - The hostname to resolve (e.g., 'localhost', 'sumberkejayan.desa.id')
 * @returns {IVillageConfig} The resolved village configuration
 * @example
 * const config = getVillageConfig('localhost');
 */
export function getVillageConfig(hostname: string): IVillageConfig {
    const cleanHost = hostname.toLowerCase().split(':')[0]
    const matched = Object.values(VILLAGES_CONFIG).find((config) =>
        config.hostnames.includes(cleanHost)
    )
    return matched || VILLAGES_CONFIG.sumberkejayan
}
