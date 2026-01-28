'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart, FaStar } from 'react-icons/fa'
import { Product } from '@/types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/produtos/${product.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <div className="relative h-64 bg-gray-200">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
            {product.category}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-secondary">{product.name}</h3>
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-sm" />
            ))}
            <span className="text-gray-600 text-sm ml-2">(4.5)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              R$ {product.price.toFixed(2)}
            </span>
            <button 
              onClick={(e) => {
                e.preventDefault()
                // Add to cart logic here
              }}
              className="bg-secondary hover:bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <FaShoppingCart />
              <span>Comprar</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
