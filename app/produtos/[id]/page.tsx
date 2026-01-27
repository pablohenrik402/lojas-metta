'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaStar, FaShoppingCart, FaMinus, FaPlus, FaTruck, FaShieldAlt, FaUndo } from 'react-icons/fa'
import Link from 'next/link'

// Mock product data - in a real app, this would come from an API or database
const productData = {
  id: 1,
  name: 'Filtro de Óleo Premium',
  price: 45.90,
  originalPrice: 59.90,
  image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800',
  category: 'Motor',
  rating: 4.5,
  reviews: 127,
  description: 'Filtro de óleo de alta qualidade para motores de automóveis. Garante a limpeza ideal do óleo, prolongando a vida útil do motor.',
  features: [
    'Material de alta resistência',
    'Filtragem eficiente de impurezas',
    'Compatível com diversos modelos',
    'Fácil instalação',
    'Testado e aprovado por montadoras',
  ],
  specifications: {
    'Marca': 'Premium Auto Parts',
    'Código': 'FO-1234',
    'Compatibilidade': 'Universal',
    'Material': 'Papel sintético',
    'Garantia': '12 meses',
  },
  inStock: true,
  stockQuantity: 45,
}

const relatedProducts = [
  {
    id: 2,
    name: 'Filtro de Ar Esportivo',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500',
    category: 'Motor',
  },
  {
    id: 3,
    name: 'Óleo Motor 5W30 Sintético',
    price: 65.90,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    category: 'Lubrificantes',
  },
  {
    id: 4,
    name: 'Vela de Ignição NGK',
    price: 24.90,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500',
    category: 'Motor',
  },
]

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(productData.image)

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= productData.stockQuantity) {
      setQuantity(newQuantity)
    }
  }

  const discount = ((productData.originalPrice - productData.price) / productData.originalPrice * 100).toFixed(0)

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">Início</Link>
          <span className="mx-2">/</span>
          <Link href="/produtos" className="hover:text-primary">Produtos</Link>
          <span className="mx-2">/</span>
          <span className="text-secondary">{productData.name}</span>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="relative h-96 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <Image
                  src={selectedImage}
                  alt={productData.name}
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
                  {productData.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-secondary mb-4">{productData.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < Math.floor(productData.rating) ? 'text-yellow-400' : 'text-gray-300'} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {productData.rating} ({productData.reviews} avaliações)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                {productData.originalPrice > productData.price && (
                  <span className="text-lg text-gray-500 line-through mr-2">
                    R$ {productData.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-4xl font-bold text-primary">
                  R$ {productData.price.toFixed(2)}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6">{productData.description}</p>

              {/* Stock Status */}
              <div className="mb-6">
                {productData.inStock ? (
                  <span className="text-green-600 font-semibold">
                    ✓ Em estoque ({productData.stockQuantity} unidades disponíveis)
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
                      disabled={quantity >= productData.stockQuantity}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <span className="text-gray-600">
                    Total: R$ {(productData.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button 
                className="w-full bg-primary hover:bg-red-700 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-colors mb-6"
                disabled={!productData.inStock}
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
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">Características</h2>
              <ul className="space-y-2">
                {productData.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">Especificações</h2>
              <dl className="space-y-2">
                {Object.entries(productData.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                    <dt className="font-semibold">{key}:</dt>
                    <dd className="text-gray-700">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-bold text-secondary mb-6">Produtos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <Link
                      href={`/produtos/${product.id}`}
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      Ver Detalhes
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
