export const code16 = `
// The following directive is required when defining server actions
"use server";

// Prisma will enable us to perform CRUD operations on our database
import { prisma } from "./lib/prisma";

// It is important that this function is asynchronous
export async function getAllCategories() {
    
    // We retrieve our categories by including their products
    const categories = await prisma.category.findMany({
        include: {
            products: true
        }
    });

    return categories;

}
`;