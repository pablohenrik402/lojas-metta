# 🚗 Lojas Metta

E-commerce moderno de peças automotivas desenvolvido com Next.js 14, React, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- ✨ Interface moderna e responsiva
- 🛒 Catálogo de produtos com categorias
- 🔍 Sistema de busca e filtros
- 📄 Páginas detalhadas de produtos
- 📱 Design mobile-first
- 📞 Formulário de contato funcional
- ℹ️ Página sobre a empresa
- ⚡ Performance otimizada com Next.js 14
- 🎨 Estilização com Tailwind CSS

## 🛠️ Tecnologias

- **Next.js 14** - Framework React com renderização server-side
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **React Icons** - Biblioteca de ícones

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/pablohenrik402/lojas-metta.git
cd lojas-metta
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🏗️ Estrutura do Projeto

```
lojas-metta/
├── app/                    # Páginas Next.js (App Router)
│   ├── categorias/        # Página de categorias
│   ├── contato/           # Página de contato
│   ├── produtos/          # Catálogo e detalhes
│   │   └── [id]/         # Produto individual
│   ├── sobre/            # Sobre a empresa
│   ├── layout.tsx        # Layout principal
│   ├── page.tsx          # Página inicial
│   └── globals.css       # Estilos globais
├── components/            # Componentes React
│   ├── Header.tsx         # Cabeçalho
│   ├── Footer.tsx         # Rodapé
│   ├── Hero.tsx           # Seção hero
│   ├── Categories.tsx     # Categorias de produtos
│   ├── FeaturedProducts.tsx # Produtos em destaque
│   └── ProductCard.tsx    # Card de produto
├── types/                 # Tipos TypeScript
│   └── index.ts          # Interfaces e tipos
├── public/               # Arquivos estáticos
├── next.config.js        # Configuração Next.js
├── tailwind.config.ts    # Configuração Tailwind
└── package.json          # Dependências
```

## 📱 Páginas

1. **Home (/)** - Página inicial com destaques
2. **Produtos (/produtos)** - Catálogo completo com filtros
3. **Produto Individual (/produtos/[id])** - Detalhes do produto
4. **Categorias (/categorias)** - Navegação por categorias
5. **Sobre (/sobre)** - História e valores da empresa
6. **Contato (/contato)** - Formulário de contato

## 🎨 Paleta de Cores

- **Primary (Vermelho):** #e63946 - Botões e destaques
- **Secondary (Azul):** #1d3557 - Textos e header
- **Accent (Claro):** #f1faee - Fundos e contraste

## 📝 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa linter
```

## 🔄 Próximas Melhorias

- [ ] Implementar carrinho de compras funcional
- [ ] Adicionar autenticação de usuários
- [ ] Integrar com API de pagamento
- [ ] Adicionar sistema de busca avançada
- [ ] Implementar avaliações de produtos
- [ ] Criar painel administrativo

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto é privado e de propriedade da Lojas Metta.

## 📞 Contato

- **Email:** sac@lojasmetta.com.br
- **Telefone:** (13) 99657-9173
- **WhatsApp:** (13) 99657-9173
- **CNPJ:** 32.436.885/0002-43
- **Endereço:** Avenida Paulista, 1636 - Conj 4 Pavimento 15 - Cond Paulista Corporate, Bela Vista - São Paulo/SP - CEP: 01310-200

---

Desenvolvido com ❤️ por Pablo H. Bento
