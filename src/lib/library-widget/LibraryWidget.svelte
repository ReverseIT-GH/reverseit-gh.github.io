<script lang="ts">
    import libraryIndex from "$lib/data/library/library.index.json";
	import type { LibraryItem } from "src/types/LibraryItem";
    export let maxItemsNo = 0;

    const libraryItems: LibraryItem[] = libraryIndex.slice(-maxItemsNo).sort((a,b)=> Date.parse(b.publication_date) - Date.parse(a.publication_date));
</script>

<ul class="text-sm list-disc list-outside text-left px-8">
    {#each libraryItems as libraryItem}
        <li class="my-1">
            <a class="tooltip inline"
            data-tip="{new Date(Date.parse(libraryItem.publication_date)).toLocaleDateString()}"
            href="{libraryItem.download_url}"
            target="_blank"
            rel="noreferrer">{@html libraryItem.title}</a>
        </li>
    {/each}
</ul>
