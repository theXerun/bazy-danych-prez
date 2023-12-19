import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const categories = await prisma.category.findMany();
    return {categories: categories };
}) satisfies PageServerLoad;

export const actions = {
    addPost: async ({request}) => {
        const data = await request.formData();
        console.log(data)
        let content = data.get("content")
        let category = data.get("category")
        console.log(category)
        let categoryDb = await prisma.category.findUnique({
            where: {
                id: Number(category)
            }
        })
        await prisma.post.create({
            data: {
                content: String(content),
                categoryId: categoryDb?.id
            }
        })
    }
}