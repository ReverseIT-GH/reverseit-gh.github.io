<script lang="ts">
    import LibraryWidget from "$lib/library-widget/LibraryWidget.svelte";
    import RssReader from "$lib/rss-reader/RssReader.svelte";
    import Icon from '@iconify/svelte';
</script>

<div class="flex w-full">
    <div class="grow card bg-base-300 rounded-box place-items-center">
        <div class="px-8 py-2 text-sm">
            <h1 class="my-2">Benvenuto su ReverseIT</h1>
            <p>Questo progetto nasce con uno scopo ben preciso, essere il successore spirituale del 
            più grande sito italiano di reverse engineering creato all'alba del nuovo millennio, la UIC (Università Italiana del Cracking).</p>
            <p>Qui troverai documenti, articoli e papers tecnici su reverse engineering, malware analysis, OS internals, low level programming, 
            cyber security e molto altro, in lingua italiana o inglese.</p>
            <p>Essendo una iniziativa gestita dalla comunità, sei invitato a prenderne parte, pubblicando i tuoi articoli o segnalando
            quelli che ritieni degni di nota e pertinenti alle tematiche trattate!</p>
        </div>
        <div class="flex place-items-center">
            <a class="m-4" href="https://www.reddit.com/r/ReverseIT/" target="_blank" rel="noreferrer">
                <Icon icon="logos:reddit-icon" width="48" /> 
            </a>
            <a class="m-4" href="https://twitter.com/ReverseIT_space" target="_blank" rel="noreferrer">
                <Icon icon="logos:twitter" width="48" />
            </a>
            <a class="m-4" href="https://github.com/ReverseIT-GH" target="_blank" rel="noreferrer">
                <Icon icon="logos:github-icon" width="48" />
            </a>
        </div>
    </div>
</div>

<div class="mt-3 flex flex-col md:flex-row gap-y-2 md:gap-y-auto">
    <div class="p-2 flex-1 card bg-base-300">
        <h2 class="font-bold text-center">Latest Library Contents</h2>
        <LibraryWidget maxItemsNo={50} />
    </div>
    <div class="divider md:divider-horizontal"/>
    <div class="p-2 flex-1 card bg-base-300">
        <h2 class="font-bold text-center">Latest CyberSec News</h2>
        <RssReader maxItemsNo={50} />
    </div>
</div>
