/**
 * @description Centralized query keys factory for TanStack Query in the SISFODES application.
 * Provides type-safe and consistent query keys used across services and hooks.
 */
export const queryKeys = {
    /**
     * @description Get query key for agenda.
     * @returns {readonly ['agenda']} Query key array.
     * @example
     * queryKeys.agenda()
     */
    agenda: () => ['agenda'] as const,

    /**
     * @description Get query key for artikel.
     * @returns {readonly ['artikel']} Query key array.
     * @example
     * queryKeys.artikel()
     */
    artikel: () => ['artikel'] as const,

    /**
     * @description Get query key for budget.
     * @returns {readonly ['budget']} Query key array.
     * @example
     * queryKeys.budget()
     */
    budget: () => ['budget'] as const,

    /**
     * @description Get query key for facilities.
     * @returns {readonly ['facilities']} Query key array.
     * @example
     * queryKeys.facility()
     */
    facility: () => ['facilities'] as const,

    /**
     * @description Get query key for gallery.
     * @returns {readonly ['gallery']} Query key array.
     * @example
     * queryKeys.gallery()
     */
    gallery: () => ['gallery'] as const,

    /**
     * @description Get query key for geography.
     * @returns {readonly ['geography']} Query key array.
     * @example
     * queryKeys.geography()
     */
    geography: () => ['geography'] as const,

    /**
     * @description Get query key for hero section data.
     * @returns {readonly ['hero']} Query key array.
     * @example
     * queryKeys.hero()
     */
    hero: () => ['hero'] as const,

    /**
     * @description Get query key for Indeks Desa Membangun (IDM).
     * @returns {readonly ['idm']} Query key array.
     * @example
     * queryKeys.idm()
     */
    idm: () => ['idm'] as const,

    /**
     * @description Query keys for village institutions.
     */
    institution: {
        /**
         * @description Get query key for all institutions.
         * @returns {readonly ['institutions']} Query key array.
         * @example
         * queryKeys.institution.all()
         */
        all: () => ['institutions'] as const,

        /**
         * @description Get query key for a single institution detail.
         * @param {string} slug - Institution unique identifier slug.
         * @returns {readonly ['institutions', string]} Query key array.
         * @example
         * queryKeys.institution.detail('bpd')
         */
        detail: (slug: string) => ['institutions', slug] as const,
    },

    /**
     * @description Query keys for news articles.
     */
    news: {
        /**
         * @description Get query key for all news.
         * @returns {readonly ['news']} Query key array.
         * @example
         * queryKeys.news.all()
         */
        all: () => ['news'] as const,

        /**
         * @description Get query key for a single news detail.
         * @param {string} slug - News article unique slug.
         * @returns {readonly ['news', string]} Query key array.
         * @example
         * queryKeys.news.detail('news-title-slug')
         */
        detail: (slug: string) => ['news', slug] as const,
    },

    /**
     * @description Get query key for village officials/apparatus.
     * @returns {readonly ['official']} Query key array.
     * @example
     * queryKeys.official()
     */
    official: () => ['official'] as const,

    /**
     * @description Get query key for awards and achievements.
     * @returns {readonly ['penghargaan']} Query key array.
     * @example
     * queryKeys.penghargaan()
     */
    penghargaan: () => ['penghargaan'] as const,

    /**
     * @description Get query key for population demographics.
     * @returns {readonly ['population']} Query key array.
     * @example
     * queryKeys.population()
     */
    population: () => ['population'] as const,

    /**
     * @description Query keys for village MSME products.
     */
    product: {
        /**
         * @description Get query key for all products.
         * @returns {readonly ['product']} Query key array.
         * @example
         * queryKeys.product.all()
         */
        all: () => ['product'] as const,

        /**
         * @description Get query key for a single product detail.
         * @param {string} slug - Product unique slug.
         * @returns {readonly ['product', string]} Query key array.
         * @example
         * queryKeys.product.detail('keripik-singkong')
         */
        detail: (slug: string) => ['product', slug] as const,
    },

    /**
     * @description Get query key for village profile.
     * @returns {readonly ['profile']} Query key array.
     * @example
     * queryKeys.profile()
     */
    profile: () => ['profile'] as const,

    /**
     * @description Query keys for village public planning/budget documents.
     */
    publication: {
        /**
         * @description Get query key for a specific publication category/document.
         * @param {string} slug - Publication category slug (e.g. apbdes, rpjmdes).
         * @returns {readonly ['publication', string]} Query key array.
         * @example
         * queryKeys.publication.detail('apbdes')
         */
        detail: (slug: string) => ['publication', slug] as const,
    },

    /**
     * @description Get query key for SDGs indicators.
     * @returns {readonly ['sdgs']} Query key array.
     * @example
     * queryKeys.sdgs()
     */
    sdgs: () => ['sdgs'] as const,
}
