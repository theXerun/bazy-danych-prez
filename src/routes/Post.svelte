<script lang="ts">
	import type { Post } from "@prisma/client";

    export let post: ({
    category: {
        id: number;
        name: string;
    } | null;
} & {
    id: number;
    content: string;
    createdAt: Date;
    categoryId: number | null;
})
</script>

<div>
    <h3>Id: {post.id}</h3>
    <p>{post.content}</p>
    <small>{post.createdAt}</small>
    {#if post.category != null}
        <small>{post.category.name}</small>
    {/if}
</div>

