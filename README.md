# E-Paper Management System | Teste Técnico RLV Tecnologia

> Desenvolvido por: **Henrique Garcia** <br/>
> Empresa: **[RLV Tecnologia](https://rlvtecnologia.com.br)** <br/>
> Data de início: **18/11/2024** <br/>
> Data de término: **Em desenvolvimento**

## Visão Geral

Uma aplicação web robusta para gerenciamento de documentos digitais (e-paper), desenvolvida com foco em performance, segurança e experiência do usuário.

## 🚀 Funcionalidades

- Gerenciamento completo de documentos digitais
- Upload e organização de documentos
- Sistema de busca e filtragem avançado
- Interface responsiva e intuitiva
- Autenticação e controle de acesso

## 💻 Tecnologias Principais

- **Framework**: Next.js 14
- **Linguagem**: TypeScript
- **Estilização**:
  - Tailwind CSS
  - Shadcn/UI
- **Banco de Dados**: PostgreSQL
- **ORM**: Prisma
- **Comunicação API**: ts-rest
- **State Management**: React Query
- **Validação**: Zod

## 📦 Instalação e Configuração

### Pré-requisitos

- Node.js (v18+)
- npm ou yarn
- PostgreSQL

### Passos de Instalação

1. Clone o repositório

```bash
git clone https://github.com/henriquegarcia-web/rlv-epaper-management.git
cd rlv-epaper-management
```

2. Instale as dependências

```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente

- Crie um arquivo `.env` na raiz do projeto
- Adicione as configurações de banco de dados:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/rlv_epaper"
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

4. Inicialize o Prisma

```bash
npx prisma migrate dev
npx prisma generate
```

5. Inicie o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

## 🧪 Testes

```bash
npm run test
# ou
yarn test
```

## 🔒 Segurança e Boas Práticas

- Tipagem forte com TypeScript
- Validações de schema com Zod
- Comunicação de API tipada com ts-rest
- ORM Prisma para prevenção de SQL Injection

## 📊 Estrutura do Projeto

```
/src
├── app/
│   ├── api/
│   └── documents/
├── components/
├── contracts/
├── hooks/
├── lib/
├── repositories/
└── utils/
```

## 🤝 Contribuição

1. Fork do projeto
2. Crie sua branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Projeto sob licença privada da RLV Tecnologia.

## 📞 Contato

**RLV Tecnologia**

- Website: [https://rlvtecnologia.com.br](https://rlvtecnologia.com.br)
- Email: contato@rlvtecnologia.com.br

---

**Desenvolvido com ❤️ por Henrique Garcia para RLV Tecnologia**

Gostaria que eu detalhasse alguma seção específica do README?
