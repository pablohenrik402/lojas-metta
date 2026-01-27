'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaShoppingCart, FaBars, FaTimes, FaSearch } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-secondary text-white shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Lojas Metta
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar peças..."
                className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-primary">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Cart and Menu */}
          <div className="flex items-center gap-4">
            <button className="relative hover:text-primary transition-colors">
              <FaShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </button>
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`pb-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link href="/produtos" className="hover:text-primary transition-colors">
                Produtos
              </Link>
            </li>
            <li>
              <Link href="/categorias" className="hover:text-primary transition-colors">
                Categorias
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:text-primary transition-colors">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-primary transition-colors">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
