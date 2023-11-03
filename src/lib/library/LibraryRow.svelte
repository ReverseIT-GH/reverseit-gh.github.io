<script lang="ts">
	import type { LibraryItem } from "src/types/LibraryItem";
    import Icon from '@iconify/svelte';

    export let libraryItem: LibraryItem;
    export let filterByAuthor = (author:string) => {}
    export let filterByCategory = (category:string) => {}

    function getLocaleIcon(locale: string) {
        switch(locale) { 
            case "it": { 
                return "twemoji:flag-italy";
            } 
            case "en": { 
                return "twemoji:flag-united-kingdom";
            } 
            default: { 
                return "noto:unknown-flag"
            } 
        } 
    }
</script>

<tr class="hover:bg-base-300">
    <td class="min-w-[14rem] whitespace-normal">
        <a class="link" href="{libraryItem.download_url}" target="_blank" rel="noreferrer">{libraryItem.title}</a>
    </td>
    <td class="min-w-[14rem] whitespace-normal">
        {libraryItem.description}
    </td>
    <td class="text-center min-w-[10rem]">
        {#each libraryItem.categories as category}
            <button class="link" on:click="{() => filterByCategory(category)}">{category}</button><br>
        {/each}
    </td>
    <td class="text-center min-w-[10rem]">
        <button class="link" on:click="{() => filterByAuthor(libraryItem.author)}">{libraryItem.author}</button>
    </td>
    <td>
        <div class="flex justify-center">
            <Icon icon={getLocaleIcon(libraryItem.language)}/>
        </div>
    </td>
    <td class="text-center">
        {libraryItem.version}
    </td>
    <td class="text-center">
        {new Date(libraryItem.creation_date).toLocaleString(undefined, {year: '2-digit', month: '2-digit', day: '2-digit'})}
    </td>
    <td class="text-center">
        {new Date(libraryItem.publication_date).toLocaleString(undefined, {year: '2-digit', month: '2-digit', day: '2-digit'})}
    </td>
</tr>