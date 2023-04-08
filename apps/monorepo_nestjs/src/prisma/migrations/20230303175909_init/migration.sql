-- CreateTable
CREATE TABLE "conditons_status" (
    "id" SERIAL NOT NULL,
    "id_credit_status" INTEGER NOT NULL,
    "expiration_fees" INTEGER,
    "expiration_time" INTEGER,

    CONSTRAINT "conditons_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credit" (
    "id" SERIAL NOT NULL,
    "id_client" INTEGER NOT NULL,
    "date_start" TIMESTAMP(0) NOT NULL,
    "date_expiration" TIMESTAMP(0) NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_tye_credit" INTEGER NOT NULL,
    "credit" DOUBLE PRECISION,
    "id_currency" INTEGER NOT NULL,
    "created_at" TIMESTAMP(0),
    "update_at" TIMESTAMP(0),

    CONSTRAINT "credit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credit_status" (
    "id" SERIAL NOT NULL,
    "color" VARCHAR(255),
    "tag" VARCHAR(255),

    CONSTRAINT "credit_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "currency" (
    "id" SERIAL NOT NULL,
    "symbol" VARCHAR(255),
    "rate_change" DOUBLE PRECISION,
    "principal" BOOLEAN,

    CONSTRAINT "currency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "last_name" VARCHAR(255),
    "address" VARCHAR(255),
    "identification" VARCHAR(255),
    "id_status" INTEGER NOT NULL,
    "created_at" TIMESTAMP(0),
    "update_at" TIMESTAMP(0),

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "guarantee" (
    "id" SERIAL NOT NULL,
    "id_credit" INTEGER NOT NULL,
    "product" VARCHAR(255),
    "product_detail" VARCHAR(255),
    "valued" DOUBLE PRECISION,

    CONSTRAINT "guarantee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_history" (
    "id" SERIAL NOT NULL,
    "id_credit" INTEGER,
    "quotas" DOUBLE PRECISION,
    "date" TIMESTAMP(0),
    "created_at" TIMESTAMP(0),

    CONSTRAINT "payment_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_credit" (
    "id" SERIAL NOT NULL,
    "percentage" DOUBLE PRECISION,
    "fees" DOUBLE PRECISION NOT NULL,
    "period" INTEGER NOT NULL,
    "defaulted_loan" DOUBLE PRECISION,

    CONSTRAINT "type_credit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "full_name" VARCHAR(255),
    "password" VARCHAR(255),
    "created_at" TIMESTAMP(0),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "id_credit_status" ON "conditons_status"("id_credit_status");

-- CreateIndex
CREATE INDEX "id_client" ON "credit"("id_client");

-- AddForeignKey
ALTER TABLE "conditons_status" ADD CONSTRAINT "conditons_status_ibfk_1" FOREIGN KEY ("id_credit_status") REFERENCES "credit_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "credit" ADD CONSTRAINT "credit_ibfk_1" FOREIGN KEY ("id_client") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
