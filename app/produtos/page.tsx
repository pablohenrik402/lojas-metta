'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import { FaFilter, FaSortAmountDown } from 'react-icons/fa'

const categories = ['Todos', ...Array.from(new Set(products.map((product) => product.category)))]

export default function ProdutosPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [sortBy, setSortBy] = useState('relevancia')

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(p => p.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'menor-preco') return a.price - b.price
    if (sortBy === 'maior-preco') return b.price - a.price
    return 0
  })

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-secondary mb-8">Produtos</h1>

        {/* Filters and Sort */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Categories Filter */}
            <div className="flex-1 w-full">
              <div className="flex items-center gap-2 mb-3">
                <FaFilter className="text-primary" />
                <span className="font-semibold">Categorias:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="w-full lg:w-auto">
              <div className="flex items-center gap-2 mb-3">
                <FaSortAmountDown className="text-primary" />
                <span className="font-semibold">Ordenar:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full lg:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="relevancia">Relevância</option>
                <option value="menor-preco">Menor Preço</option>
                <option value="maior-preco">Maior Preço</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-4">
          <p className="text-gray-600">
            Mostrando {sortedProducts.length} produto{sortedProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
