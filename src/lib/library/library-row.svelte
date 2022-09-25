<script lang="ts">
	import type { LibraryItem } from "src/types/LibraryItem";
    import Icon from '@iconify/svelte';

    export let libraryItem: LibraryItem;
    export let addQueryParamFun = (param:string, value:any) => {}

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

<tr class="hover">
    <td>
        <a class="link" href="{libraryItem.download_url}" target='_blank'>{libraryItem.title}</a>
    </td>
    <td>
        {libraryItem.description}
    </td>
    <td class="text-center">
        {#each libraryItem.categories as category}
            <a class="link" href="{addQueryParamFun('category', category)}" target="_self">{category}</a><br>
        {/each}
    </td>
    <td>
        <a class="link" href="{addQueryParamFun('author', libraryItem.author)}" target="_self">{libraryItem.author}</a>
    </td>
    <td>
        <Icon icon={getLocaleIcon(libraryItem.language)}/>
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