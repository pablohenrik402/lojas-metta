
'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { FaStar, FaShoppingCart, FaMinus, FaPlus, FaTruck, FaShieldAlt, FaUndo } from 'react-icons/fa'
import Link from 'next/link'
import { products } from '@/data/products'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = useMemo(
    () => products.find((item) => item.id === params.id),
    [params.id]
  )

  if (!product) {
    return (
      <div className="py-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-secondary mb-4">Produto não encontrado</h1>
          <p className="text-gray-600 mb-6">Não encontramos este produto no catálogo atual.</p>
          <Link href="/produtos" className="text-primary hover:underline">
            Voltar para produtos
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = useMemo(
    () => products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 6),
    [product.category, product.id]
  )

  const [quantity, setQuantity] = useState(1)
  const [selectedImage] = useState(product.image)

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    const maxQuantity = product.stockQuantity ?? 0
    if (newQuantity >= 1 && (maxQuantity === 0 || newQuantity <= maxQuantity)) {
      setQuantity(newQuantity)
    }
  }

  const hasOriginalPrice = typeof product.originalPrice === 'number' && product.originalPrice > product.price
  const discount = hasOriginalPrice
    ? ((product.originalPrice! - product.price) / product.originalPrice! * 100).toFixed(0)
    : null

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">Início</Link>
          <span className="mx-2">/</span>
          <Link href="/produtos" className="hover:text-primary">Produtos</Link>
          <span className="mx-2">/</span>
          <span className="text-secondary">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="relative h-96 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {discount && (
                  <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full font-semibold">
                    -{discount}%
                  </span>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-2">
                <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-sm">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-secondary mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < Math.floor(product.rating ?? 0) ? 'text-yellow-400' : 'text-gray-300'} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {product.rating ? `${product.rating} (${product.reviews ?? 0} avaliações)` : 'Sem avaliações'}
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                {hasOriginalPrice && (
                  <span className="text-lg text-gray-500 line-through mr-2">
                    R$ {product.originalPrice!.toFixed(2)}
                  </span>
                )}
                <span className="text-4xl font-bold text-primary">
                  R$ {product.price.toFixed(2)}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6">
                {product.description ?? 'Descrição não informada.'}
              </p>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <span className="text-green-600 font-semibold">
                    ✓ Em estoque {product.stockQuantity ? `(${product.stockQuantity} unidades disponíveis)` : ''}
                  </span>
                ) : (
                  <span className="text-red-600 font-semibold">✗ Produto indisponível</span>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Quantidade:</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <FaMinus />
                    </button>
                    <span className="px-6 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                      disabled={product.stockQuantity ? quantity >= product.stockQuantity : false}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <span className="text-gray-600">
                    Total: R$ {(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button 
                className="w-full bg-primary hover:bg-red-700 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-colors mb-6"
                disabled={!product.inStock}
              >
                <FaShoppingCart size={20} />
                Adicionar ao Carrinho
              </button>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 text-sm">
                  <FaTruck className="text-primary text-xl" />
                  <span>Entrega rápida</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FaShieldAlt className="text-primary text-xl" />
                  <span>Compra segura</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FaUndo className="text-primary text-xl" />
                  <span>7 dias para trocar</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        {(product.features?.length || product.specifications) && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.features?.length && (
                <div>
                  <h2 className="text-2xl font-bold text-secondary mb-4">Características</h2>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.specifications && (
                <div>
                  <h2 className="text-2xl font-bold text-secondary mb-4">Especificações</h2>
                  <dl className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                        <dt className="font-semibold">{key}:</dt>
                        <dd className="text-gray-700">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-bold text-secondary mb-6">Produtos Relacionados</h2>
          {relatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((related) => (
                <div key={related.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={related.image}
                      alt={related.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{related.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        R$ {related.price.toFixed(2)}
                      </span>
                      <Link
                        href={`/produtos/${related.id}`}
                        className="text-secondary hover:text-primary transition-colors"
                      >
                        Ver Detalhes
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Nenhum produto relacionado encontrado.</p>
          )}
        </div>
      </div>
    </div>
  )
}
