export const code18 = `
// The following directive is required when defining server actions
"use server";

import { revalidatePath } from "next/cache";
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

// With this server action, we have as input the data submitted by our form
export async function createProduct(formData: FormData) {

    // We create an object for our product
    const product = {
        categoryId: formData.get("category-id") as string,
        name: formData.get("name") as string
    };

    // We save the product
    await prisma.product.create({
        data: product
    });

    // We refresh data on home page after creating a product
    revalidatePath("/");

}
`;