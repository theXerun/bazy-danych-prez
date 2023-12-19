<script lang="ts">
	import Post from "./Post.svelte";
	import type { PageData } from './$types'
	export let data: PageData
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>strona główna</h1>
	<p>Dostępne kategorie</p>
	<ul>
		{#each data.categories as category}
			<li><a href="/{category.name}">{category.name}</a></li>
		{/each}
	</ul>
	<h3>Posty</h3>
	{#each data.posts as post}
		<Post post={post}></Post>
	{/each}
</section>

