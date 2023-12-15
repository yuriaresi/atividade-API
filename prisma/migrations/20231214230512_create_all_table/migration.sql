-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "idade" INTEGER NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "senha" VARCHAR(50) NOT NULL,
    "linkGitHub" VARCHAR(244),
    "dt_hr_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_hr_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" UUID NOT NULL,
    "descricao" VARCHAR(300) NOT NULL,
    "preco" INTEGER NOT NULL,
    "quantidade_estoque" INTEGER NOT NULL,
    "tipo_produto" VARCHAR(10) NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "disponivel" BOOLEAN,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loja" (
    "cnpj" VARCHAR(14) NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "segmento" VARCHAR(30) DEFAULT 'alimentacao',
    "endereco" VARCHAR(50) NOT NULL,
    "telefone" VARCHAR(11),
    "qt_filiais" INTEGER NOT NULL,
    "data_hora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Loja_pkey" PRIMARY KEY ("cnpj")
);

-- CreateTable
CREATE TABLE "Fornecedor" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "avaliacao" DECIMAL(65,30) NOT NULL,
    "dt_hr_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_hr_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fornecedor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Fornecedor_email_key" ON "Fornecedor"("email");
