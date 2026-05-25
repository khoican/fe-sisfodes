/**
 * @description Interface representing the configuration details for a village tenant in the multi-domain system.
 */
export interface IVillageConfig {
    id: string
    hostnames: string[]
    name: string
    tagline: string
    logo: string
    address: {
        street: string
        hamlet: string
        district: string
        regency: string
        province: string
        postal_code: string
    }
    map: string
    location: {
        longitude: number
        latitude: number
    }
    contacts: {
        phone: string
        whatsapp: string
        email: string
    }
    socials?: {
        facebook?: string
        instagram?: string
        youtube?: string
        twitter?: string
    }
    theme: 'primary' | 'green' | 'pink' | 'purple' | 'yellow'
}

/**
 * @description Centralized village configurations for multi-domain hosting.
 */
export const VILLAGES_CONFIG: Record<string, IVillageConfig> = {
    sumberkejayan: {
        id: 'sumberkejayan',
        hostnames: ['localhost', '127.0.0.1', 'sumberkejayan.desa.id'],
        name: 'Desa Sumberkejayan',
        tagline: 'Melayani warga dengan sepenuh hati, membangun kemandirian ekonomi dari potensi lokal yang berkelanjutan.',
        logo: 'https://ik.imagekit.io/rulls/sisfodes/demo/logo/logo.svg?tr=f-webp',
        address: {
            street: 'Jl. Banyuwangi No.6',
            hamlet: 'Tegalan',
            district: 'Mayang',
            regency: 'Jember',
            province: 'Jawa Timur',
            postal_code: '68182',
        },
        map: 'https://ik.imagekit.io/rulls/sisfodes/demo/peta-desa.webp?updatedAt=1777648884236?tr=f-webp',
        location: {
            longitude: 113.8329968231125,
            latitude: -8.176801402877157,
        },
        contacts: {
            phone: '08123456789',
            whatsapp: '08123456789',
            email: 'sumberkejayan@desa.id',
        },
        socials: {
            facebook: 'https://www.facebook.com/',
            instagram: 'https://www.instagram.com/',
        },
        theme: 'primary',
    },
    desademo: {
        id: 'desademo',
        hostnames: ['desademo.localhost', 'demo.desa.id'],
        name: 'Desa Demo',
        tagline: 'Desa percontohan digital mandiri untuk Indonesia Maju.',
        logo: 'https://ik.imagekit.io/rulls/sisfodes/demo/logo/logo.svg?updatedAt=1777281903061',
        address: {
            street: 'Jl. Merdeka No.1',
            hamlet: 'Krajan',
            district: 'Arjasa',
            regency: 'Jember',
            province: 'Jawa Timur',
            postal_code: '68191',
        },
        map: 'https://ik.imagekit.io/rulls/sisfodes/demo/peta-desa.webp?updatedAt=1777648884236?tr=f-webp',
        location: {
            longitude: 113.7123,
            latitude: -8.1234,
        },
        contacts: {
            phone: '08987654321',
            whatsapp: '08987654321',
            email: 'demo@desa.id',
        },
        socials: {
            facebook: 'https://www.facebook.com/',
            instagram: 'https://www.instagram.com/',
        },
        theme: 'green',
    },
}
