<script lang="ts">
    import parse from 'rss-to-json';
    import rssSources from '$lib/data/rss-feeds/rss-sources.json';
	import RssEntry from './RssEntry.svelte';
    import type { RssItem } from 'src/types/RssItem'
    export let maxItemsNo = 0;


    async function fetchRssSource(rssSource: any){  
        let sourceItems: RssItem[] = [];
        try {
            const feed = await parse(rssSource.url);
            feed.items.forEach(item => {
            let rssItem: RssItem = {title: item.title, link: item.link, pubDate: item.created};
            sourceItems.push(rssItem);
            });
        } catch(e: any) {
            console.log("[RSS] Fetching of: " + rssSource.name + " failed with error: " + e.message);
        }
        return sourceItems;
    }

    function sortRssItems(sourceItems: RssItem[]) {
        return sourceItems.sort(({pubDate:a}, {pubDate:b}) => b-a);
    }

    const news = (async () => {
        let rssItems: RssItem[] = [];
        for (const rssSource of rssSources) {
            const items: RssItem[] = await fetchRssSource(rssSource);
            rssItems = rssItems.concat(items);
        }
        return sortRssItems(rssItems).slice(0, maxItemsNo);
    })();
</script>

<div class="text-sm">
    {#await news}
        <div>Loading...</div>
    {:then rssItems}
        <ul class="list-disc list-outside text-left px-8">
            {#each rssItems as {title, link, pubDate}, index}
                <RssEntry rssTitle={title} rssUrl={link} rssPubDate={pubDate}/> 
            {/each}
        </ul>
    {:catch error}
        <div class="text-error">RSS Error</div>
    {/await}
</div>
