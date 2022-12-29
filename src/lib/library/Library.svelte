<script lang="ts">
    import type { LibraryItem } from "src/types/LibraryItem";
    import libraryIndex from "$lib/data/library/library.index.json"
    import libraryCategories from "$lib/data/library/categories.json"
    import LibraryRow from "$lib/library/LibraryRow.svelte"

    const orderedLibraryIndex = libraryIndex.sort((a,b)=> Date.parse(b.publication_date) - Date.parse(a.publication_date));
    const itemsPerPage: number = 10;
    let libraryItems: LibraryItem[] = orderedLibraryIndex;
    let currentPage: number = 1;
    let searchText: string = "";
    let selectedCategory: string = "Scegli categoria";

    function filterByCategory(category:string) {
        libraryItems = libraryCategories.includes(category)? orderedLibraryIndex.filter(a => a.categories.includes(category)) : orderedLibraryIndex;
        currentPage = 1;
        selectedCategory = "Scegli categoria";
    }

    function filterByAuthor(author:string) {
        libraryItems = author? orderedLibraryIndex.filter(a => a.author === author) : orderedLibraryIndex;
        currentPage = 1;
    }

    function filterByKeywords(keyword:string) {
        libraryItems = keyword? orderedLibraryIndex.filter(a => (a.title.toLowerCase().includes(keyword.toLowerCase()) || a.description.toLowerCase().includes(keyword.toLowerCase()))) : orderedLibraryIndex;
        currentPage = 1;
        searchText = "";
    }

    function changePage(pageIndex:number) {
        currentPage = pageIndex;
    }
</script>

<div class="my-2.5 flex justify-end">
    <input type="text" placeholder="Search" class="input input-bordered mx-1.5 w-48" bind:value={searchText} />
    <button class="btn mx-2 w-28" on:click="{() => filterByKeywords(searchText)}">Cerca</button>
</div>

<div class="my-2.5 flex justify-end">
    <select class="select select-bordered mx-1.5 w-48" bind:value={selectedCategory}>
        <option disabled selected>Scegli categoria</option>
        {#each libraryCategories as libraryCategory}
            <option>{libraryCategory}</option>
        {/each}
      </select>
    <button class="btn mx-2 w-28" class:btn-disabled={!libraryCategories.includes(selectedCategory)} on:click="{() => filterByCategory(selectedCategory)}">Seleziona</button>
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
                <LibraryRow
                    libraryItem={libraryItem}
                    filterByAuthor={(author) => filterByAuthor(author)}
                    filterByCategory={(category) => filterByCategory(category)}/>
            {/each}
        </tbody>
    </table>
</div>

<div class="btn-group my-2.5 flex justify-end">
    <button class="btn" class:btn-disabled={currentPage <= 1} on:click={() => changePage(currentPage-currentPage+1)}>«</button>
    <button class="btn" class:btn-disabled={currentPage <= 1} on:click={() => changePage(currentPage-1)}>‹</button>
    <button class="btn btn-disabled" on:click={null}>{currentPage}/{Math.ceil(libraryItems.length/itemsPerPage)}</button>
    <button class="btn" class:btn-disabled={currentPage >= Math.ceil(libraryItems.length/itemsPerPage)} on:click={() => changePage(currentPage+1)}>›</button>
    <button class="btn" class:btn-disabled={currentPage >= Math.ceil(libraryItems.length/itemsPerPage)} on:click={() => changePage(Math.ceil(libraryItems.length/itemsPerPage))}>»</button>
</div>

<div class="text-center mt-4 mb-8">
    <div class="stats shadow">
        <div class="stat">
            <div class="stat-title">Numero totale di documenti:</div>
            <div class="stat-value">{libraryIndex.length}</div>
        </div>
    </div>
</div>

<style>
.table th:first-child { /* This hack is needed as a workaround. Issue: https://github.com/saadeghi/daisyui/issues/665 */
     position: relative !important;
}
</style>
