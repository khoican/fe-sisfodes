import type { News } from '#/types/news'

export const artikelData: News[] = [
  {
    id: 1,
    slug: 'pentingnya-menjaga-kebersihan-lingkungan-desa',
    title: 'Pentingnya Menjaga Kebersihan Lingkungan Desa',
    description: 'Artikel edukasi mengenai cara sederhana menjaga keasrian lingkungan desa demi kesehatan bersama.',
    content: `
      <p>Kebersihan lingkungan merupakan faktor utama dalam menciptakan kehidupan yang sehat dan nyaman. Di lingkungan desa, menjaga kebersihan bisa dimulai dari hal-hal kecil seperti tidak membuang sampah sembarangan dan rutin membersihkan halaman rumah sendiri.</p>
      <p>Selain itu, pengelolaan sampah organik menjadi kompos juga sangat disarankan bagi warga desa yang mayoritas memiliki lahan atau kebun. Dengan mengolah sampah sendiri, kita bisa mengurangi beban tempat pembuangan akhir sekaligus mendapatkan pupuk gratis untuk tanaman.</p>
      <p>Mari kita tanamkan rasa memiliki terhadap lingkungan desa kita agar tetap asri dan nyaman untuk generasi mendatang.</p>
    `,
    image: 'https://ik.imagekit.io/rulls/sisfodes/demo/news/inovasi-pengolahan-sampah-menjadi-pupuk-organik.jpg?tr-f=webp',
    category: { id: 1, name: 'Edukasi' },
    author: 'Admin Desa',
    created_at: new Date('2026-05-01T08:00:00')
  },
  {
    id: 2,
    slug: 'tips-sukses-budidaya-padi-organik',
    title: 'Tips Sukses Budidaya Padi Organik',
    description: 'Panduan praktis bagi petani desa yang ingin beralih ke pertanian organik yang lebih ramah lingkungan.',
    content: `
      <p>Pertanian organik kini semakin diminati karena kualitas hasilnya yang lebih sehat dan harga jualnya yang lebih stabil. Bagi petani Desa Sumberkejayan, beralih ke organik berarti juga menghemat biaya pembelian pupuk kimia yang harganya terus naik.</p>
      <p>Kunci utama budidaya padi organik adalah pada persiapan lahan dan penggunaan benih unggul. Selain itu, pengendalian hama menggunakan pestisida nabati juga sangat menentukan keberhasilan panen.</p>
      <p>Pemerintah desa melalui penyuluh pertanian siap memberikan pendampingan bagi kelompok tani yang ingin serius menekuni sistem pertanian ini.</p>
    `,
    image: 'https://ik.imagekit.io/rulls/sisfodes/demo/news/panen-raya-padi-organik-desa-sukamaju.jpg?tr-f=webp',
    category: { id: 2, name: 'Pertanian' },
    author: 'Penyuluh Pertanian',
    created_at: new Date('2026-05-03T09:00:00')
  }
]
