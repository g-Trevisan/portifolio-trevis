# Portfólio

Portfólio pessoal desenvolvido com React, TypeScript, Vite e Tailwind CSS. O projeto apresenta perfil profissional, resumo sobre a trajetória, projetos, habilidades, links de contato, troca de tema e botão flutuante para WhatsApp.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React
- ESLint
- React Compiler

## Como rodar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Gere a versão de produção:

```bash
npm run build
```

Visualize o build localmente:

```bash
npm run preview
```

Execute a verificação de lint:

```bash
npm run lint
```

## Hospedagem e domínio

O projeto está hospedado na Vercel e usa o domínio personalizado `g-trevisan.com.br`.

- Hospedagem: Vercel
- Domínio: `g-trevisan.com.br`
- Registro do domínio: Registro.br
- URL de produção: `https://g-trevisan.com.br`

## Estrutura do projeto

```text
.
├── public/
│   └── favicons e ícones públicos
├── src/
│   ├── assets/
│   │   └── portfolio/
│   │       └── imagens usadas no perfil e nos projetos
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header, Footer e botão de WhatsApp
│   │   ├── sections/
│   │   │   └── Hero, About, Projects, Skills e Contact
│   │   └── ui/
│   │       └── componentes reutilizáveis de interface
│   ├── data/
│   │   └── portfolio.ts
│   ├── hooks/
│   │   └── hooks de navegação, tema, menu e seção ativa
│   ├── lib/
│   │   └── utilitários de tema, estilos e classes
│   ├── types/
│   │   └── tipos compartilhados do portfólio
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── vite.config.ts
└── package.json
```

## Onde alterar o conteúdo

A maior parte do conteúdo editável fica centralizada em `src/data/portfolio.ts`.

- `PROFILE`: nome, localização e imagem principal.
- `ABOUT_PARAGRAPHS`: textos da seção "Sobre".
- `PROJECTS`: projetos exibidos, imagens, descrições, links e tags.
- `SKILL_GROUPS`: grupos de habilidades e tecnologias.
- `CONTACT_LINKS`: e-mail, GitHub, LinkedIn, Instagram e outros contatos.
- `WHATSAPP_URL`: link usado no botão flutuante de WhatsApp.
- `THEME_OPTIONS`: opções exibidas no seletor de tema.
- `NAV_SECTIONS` e `SECTION_IDS`: seções usadas pela navegação e pelo destaque de seção ativa.

As imagens importadas nesse arquivo ficam em `src/assets/portfolio/`.

## Temas e estilos

Os temas disponíveis são:

- `escuro`
- `amoled`
- `claro`
- `liquido`

As cores, variáveis CSS, animações e ajustes responsivos ficam em `src/index.css`. A configuração do tema padrão e da chave usada no `localStorage` fica em `src/lib/theme.ts`.

O projeto usa Tailwind CSS via plugin do Vite e alias `@` apontando para `src`, configurado em `vite.config.ts`.

## Componentes principais

- `src/App.tsx`: monta a página, aplica o tema atual e organiza as seções.
- `src/components/layout/Header.tsx`: navegação, menu mobile e seletor de tema.
- `src/components/layout/WhatsAppButton.tsx`: botão flutuante de contato.
- `src/components/sections/Hero.tsx`: primeira dobra do portfólio.
- `src/components/sections/About.tsx`: resumo profissional.
- `src/components/sections/Projects.tsx`: cards de projetos.
- `src/components/sections/Skills.tsx`: grupos de habilidades.
- `src/components/sections/Contact.tsx`: links de contato.

## Scripts disponíveis

| Script            | Descrição                                    |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Inicia o Vite em modo desenvolvimento.       |
| `npm run build`   | Executa `tsc -b` e gera o build em `dist/`.  |
| `npm run lint`    | Roda o ESLint no projeto.                    |
| `npm run preview` | Serve localmente a versão gerada em `dist/`. |
