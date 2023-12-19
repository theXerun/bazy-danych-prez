import prisma from "$lib/prisma";
import type { PageServerLoad } from './$types';

export const load = (async ({ params: { category } }) => {
    const posts = await prisma.post.findMany({
        where: {category: {name: category}},
        include: {
            category: true
        }
    });
    return { category: category, posts: posts }
}) satisfies PageServerLoad;