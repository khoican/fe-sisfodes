import ProductCard from '#/components/shared/card/product'
import Title from '#/components/ui/title'
import type { Product } from '#/types/product'
import { MdStorefront } from 'react-icons/md'

interface ProductProps {
  products: Product[]
}

/**
 * Seksi Produk yang menampilkan daftar produk unggulan desa.
 * 
 * @param {ProductProps} props - Properti komponen berisi daftar produk.
 * @returns {JSX.Element} Elemen seksi produk.
 */
export default function ProductSection({ products }: ProductProps) {
  return (
    <div className='w-full mt-16'>
      <Title
        title='Produk Unggulan'
        link={{
          to: '/produk',
          label: 'Eksplor Produk',
          icon: MdStorefront
        }}
      />

      <div className='grid md:grid-cols-2 lg:grid-cols-4 w-full gap-6'>
        {products.slice(0, 4).map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
