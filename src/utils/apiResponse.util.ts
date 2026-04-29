/**
 * Utility untuk standarisasi response API menggunakan pendekatan OOP.
 * Memastikan konsistensi format metadata dan data di seluruh endpoint.
 */
export class ApiResponse {
  /**
   * Menghasilkan response sukses yang terstandarisasi.
   * 
   * @param {any} data - Payload data yang akan dikirimkan ke client.
   * @param {string} [message='Success'] - Pesan deskripsi sukses.
   * @param {number} [code=200] - HTTP status code.
   * @returns {Response} Objek Response TanStack Start.
   * 
   * @example
   * ApiResponse.success({ name: 'Sisfodes' }, 'Data berhasil diambil');
   */
  static success(data: any, message: string = 'Success', code: number = 200): Response {
    return Response.json({
      metadata: {
        code,
        message,
      },
      response: data,
    });
  }

  /**
   * Menghasilkan response error yang terstandarisasi.
   * 
   * @param {string} [message='Internal Server Error'] - Pesan deskripsi error.
   * @param {number} [code=500] - HTTP status code.
   * @returns {Response} Objek Response TanStack Start.
   * 
   * @example
   * ApiResponse.error('Data tidak ditemukan', 404);
   */
  static error(message: string = 'Internal Server Error', code: number = 500): Response {
    return Response.json({
      metadata: {
        code,
        message,
      },
      response: null,
    });
  }
}
