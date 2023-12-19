import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const posts = await prisma.post.findMany({include: {category: true}});
    const categories = await prisma.category.findMany();
    return { posts: posts, categories: categories };
}) satisfies PageServerLoad;