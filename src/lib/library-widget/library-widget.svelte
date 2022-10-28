<script lang="ts">
    import libraryIndex from "$lib/data/library/library.index.json"
    import type { LibraryItem } from "src/types/LibraryItem";
    let libraryItems: LibraryItem[] = libraryIndex.slice(-10).reverse();
</script>

<ul class="list-disc list-outside text-left px-8">
    {#each libraryItems as libraryItem}
    <li class="my-1">
        <div class="tooltip inline" data-tip="{new Date(Date.parse(libraryItem.publication_date)).toLocaleDateString()}">
            <h3 class="inline"><a class="link" href="{libraryItem.download_url}" target="_blank">{@html libraryItem.title}</a></h3>
        </div>
    </li>
    {/each}
</ul>