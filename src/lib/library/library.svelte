<script lang="ts">
    import type { LibraryItem } from "src/types/LibraryItem";
    import libraryIndex from "$lib/data/library/library.index.json"
    import libraryCategories from "$lib/data/library/categories.json"
    import LibraryRow from "$lib/library/library-row.svelte"
    import { page } from '$app/stores';
    import { onMount } from "svelte";


    let libraryItems: LibraryItem[] = libraryIndex.sort((a,b)=> Date.parse(b.publication_date) - Date.parse(a.publication_date));
    let currentUrl: URL;
    let itemsPerPage: number;
    let currentPage: number;
    let searchText: string;
    let selectedCategory: string;

    onMount(() => {
        currentUrl = $page.url;
        itemsPerPage = Number($page.url.searchParams.get('page-items')) || 10;
        currentPage = Number($page.url.searchParams.get('current-page')) || 1;
        filterByAuthor($page.url.searchParams.get('author') || "");
        filterByCategory($page.url.searchParams.get('category') || "");
        filterByKeywords($page.url.searchParams.get('search') || "");
    })

    function filterByCategory(category:string) {
        libraryItems = category? libraryItems.filter(a => a.categories.includes(category)) : libraryItems;
    }

    function filterByAuthor(author:string) {
        libraryItems = author? libraryItems.filter(a => a.author === author) : libraryItems;
    }

    function filterByKeywords(keyword:string) {
        libraryItems = keyword? libraryItems.filter(a => (a.title.toLowerCase().includes(keyword.toLowerCase()) || a.description.toLowerCase().includes(keyword.toLowerCase()))) : libraryItems;
    }

    function addQueryParam(param:string, value:any, deleteOtherParams: boolean) {
        if(currentUrl == undefined) {
            return currentUrl;
        }
        let newUrl: URL = new URL(currentUrl);
        if(deleteOtherParams) {
            currentUrl.searchParams.forEach((value, key) => {
                newUrl.searchParams.delete(key);
            });
        }
        newUrl.searchParams.set(param, value);
        return String(newUrl);
    }
</script>

<div class="my-2.5 flex justify-end">
    <input type="text" placeholder="Search" class="input input-bordered w-full max-w-xs mx-1.5" bind:value={searchText} />
    <a class="btn" href="{addQueryParam('search', searchText, true)}" target="_self">Cerca</a>
</div>

<div class="my-2.5 flex justify-end">
    <select class="select select-bordered w-full max-w-xs mx-1.5" bind:value={selectedCategory}>
        <option disabled selected>Scegli categoria</option>
        {#each libraryCategories as libraryCategory}
            <option>{libraryCategory}</option>
        {/each}
      </select>
    <a class="btn" class:btn-disabled={!libraryCategories.includes(selectedCategory)} href="{addQueryParam('category', selectedCategory, true)}" target="_self">Seleziona</a>
</div>

<div class="overflow-x-auto my-2.5">
    <table class="table table-compact w-full">
        <thead>
            <tr class="text-center">
                <th>Titolo</th>
                <th>Descrizione</th>
                <th>Categorie</th>
                <th>Autore</th>
                <th>Lingua</th>
                <th>Versione</th>
                <th>Data creazione</th>
                <th>Data pubblicazione</th>
            </tr>
        </thead>
        <tbody>
            {#each libraryItems.slice((currentPage-1)*itemsPerPage, (currentPage-1)*itemsPerPage+itemsPerPage) as libraryItem }
                <LibraryRow libraryItem={libraryItem} addQueryParamFun={(param, value, flag) => addQueryParam(param, value, flag)}/>
            {/each}
        </tbody>
    </table>
</div>

<div class="btn-group my-2.5 flex justify-end">
    <a class="btn" class:btn-disabled={currentPage <= 1} href={addQueryParam('current-page', currentPage-currentPage+1, false)} target="_self">«</a>
    <a class="btn" class:btn-disabled={currentPage <= 1} href={addQueryParam('current-page', currentPage-1, false)} target="_self">‹</a>
    <a class="btn btn-disabled" href={null}>{currentPage}/{Math.ceil(libraryItems.length/itemsPerPage)}</a>
    <a class="btn" class:btn-disabled={currentPage >= Math.ceil(libraryItems.length/itemsPerPage)} href={addQueryParam('current-page', currentPage+1, false)} target="_self">›</a>
    <a class="btn" class:btn-disabled={currentPage >= Math.ceil(libraryItems.length/itemsPerPage)} href={addQueryParam('current-page', Math.ceil(libraryItems.length/itemsPerPage), false)} target="_self">»</a>
</div>

<div class="text-center mt-4 mb-8">
    <div class="stats shadow">
        <div class="stat">
            <div class="stat-title">Numero totale di documenti:</div>
            <div class="stat-value">{libraryIndex.length}</div>
        </div>
    </div>
</div>
