export interface IIdmSummary {
    SKOR_SAAT_INI: number
    STATUS: string
    TARGET_STATUS: string
    SKOR_MINIMAL: string
    PENAMBAHAN: number
    TAHUN: number
}

export interface IIdmRow {
    NO: number | null
    INDIKATOR: string
    SKOR: number | string
    KETERANGAN: string | null
    KEGIATAN: string | null
    NILAI: string | null
    PUSAT: string | null
    PROV: string | null
    KAB: string | null
    DESA: string | null
    CSR: string | null
    LAINNYA: string | null
    ROW_CELL: number
}

export interface IIdmIdentity {
    nama_provinsi: string
    id_prov: string
    id_kabupaten: string
    nama_kab_kota: string
    id_kecamatan: string
    nama_kecamatan: string
    id_desa: string
    nama_desa: string
}

export interface IIdm {
    SUMMARIES: IIdmSummary
    ROW: IIdmRow[]
    IDENTITAS: IIdmIdentity[]
}
