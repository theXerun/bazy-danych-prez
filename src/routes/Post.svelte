<script lang="ts">
	import type { Category, Post } from "@prisma/client";

    export let post: Post & {category: Category}
</script>

<div>
    <h3>Id: {post.id}</h3>
    <p>{post.content}</p>
    <small>{post.createdAt}</small>
    {#if post.category != null}
        <small>{post.category.name}</small>
    {/if}
</div>

