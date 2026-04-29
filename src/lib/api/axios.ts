import type { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

/**
 * Interface untuk format response standar dari backend
 */
interface ApiResponse<T = any> {
  metadata: {
    code: number;
    message: string;
  };
  response: T;
}

/**
 * Konfigurasi dasar Axios Instance
 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request Interceptor
 */
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Anda bisa menambahkan logic token di sini
    // const token = localStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 */
axiosInstance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    // Jika backend mengembalikan status 200 tetapi metadata code bukan 200
    // (Misal: logic error dari server)
    const { metadata } = response.data;
    if (metadata.code !== 200) {
      return Promise.reject(new Error(metadata.message || 'API Logic Error'));
    }
    return response;
  },
  (error: AxiosError<ApiResponse>) => {
    let errorMessage = 'Terjadi kesalahan pada sistem.';

    if (error.response) {
      // Handling berdasarkan status code HTTP yang umum
      const status = error.response.status;
      const data = error.response.data;

      // Ambil pesan error dari response backend jika ada
      const serverMessage = data?.metadata?.message;

      switch (status) {
        case 400:
          errorMessage = serverMessage || 'Permintaan tidak valid (Bad Request).';
          break;
        case 401:
          errorMessage = serverMessage || 'Sesi berakhir, silakan login kembali.';
          // Logic logout bisa diletakkan di sini
          break;
        case 403:
          errorMessage = serverMessage || 'Anda tidak memiliki akses ke halaman ini.';
          break;
        case 404:
          errorMessage = serverMessage || 'Data atau endpoint tidak ditemukan.';
          break;
        case 422:
          errorMessage = serverMessage || 'Gagal memproses data (Validation Error).';
          break;
        case 429:
          errorMessage = 'Terlalu banyak permintaan, silakan coba lagi nanti.';
          break;
        case 500:
          errorMessage = serverMessage || 'Terjadi kesalahan internal pada server.';
          break;
        case 503:
          errorMessage = 'Layanan sedang tidak tersedia (Maintenance).';
          break;
        default:
          errorMessage = serverMessage || `Error: ${status}`;
      }
    } else if (error.request) {
      // Request terkirim tapi tidak ada response (Network Error/Timeout)
      errorMessage = 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.';
    }

    // Mengubah error object agar memuat pesan yang sudah kita buat
    const customError = new Error(errorMessage);
    return Promise.reject(customError);
  }
);

/**
 * Wrapper API Caller untuk kemudahan penggunaan
 */
export const api = {
  get: <T>(url: string, config = {}) => 
    axiosInstance.get<ApiResponse<T>>(url, config).then(res => res.data),
  
  post: <T>(url: string, data = {}, config = {}) => 
    axiosInstance.post<ApiResponse<T>>(url, data, config).then(res => res.data),
  
  put: <T>(url: string, data = {}, config = {}) => 
    axiosInstance.put<ApiResponse<T>>(url, data, config).then(res => res.data),
  
  delete: <T>(url: string, config = {}) => 
    axiosInstance.delete<ApiResponse<T>>(url, config).then(res => res.data),
    
  patch: <T>(url: string, data = {}, config = {}) => 
    axiosInstance.patch<ApiResponse<T>>(url, data, config).then(res => res.data),
};

export default axiosInstance;
