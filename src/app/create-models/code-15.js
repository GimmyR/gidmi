export const code15 = `
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
    provider = "prisma-client-js"
    output   = "../generated/prisma"
}

datasource db {
    provider = "sqlite"
    url      = env("DATABASE_URL")
}

model Category {
    id String @id @default(cuid())
    name String @unique
    products Product[]
}

model Product {
    id String @id @default(cuid())
    categoryId String
    category Category @relation(fields: [categoryId], references: [id])
    name String @unique
}
`;