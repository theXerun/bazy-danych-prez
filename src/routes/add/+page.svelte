<script lang="ts">
	import type { PageData } from './$types';
	import Select from 'svelte-select';
	let selected: string;
	export let data: PageData;
</script>

<form method="POST" action="?/addPost">
	<label>
		Treść
		<input name="content" type="text" />
	</label>
	<label>
		Kategoria
		<select name="category" id="category">
			{#each data.categories as category}
				<option value={category.id}>{category.name}</option>
			{/each}
		</select>
	</label>
	<button type="submit">Dodaj</button>
</form>
