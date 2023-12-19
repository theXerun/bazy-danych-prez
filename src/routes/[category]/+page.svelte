<script lang="ts">
    import Post from '../Post.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<svelte:head>
	<title>{data.category}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>{data.category}</h1>
	<h3>Posty</h3>
	{#each data.posts as post}
		<Post post={post}></Post>
	{/each}
</section>