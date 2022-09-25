<script lang="ts">
    import parse from 'rss-to-json';
    import rssSources from '$lib/data/rss-feeds/rss-sources.json';
	import RssEntry from './rss-entry.svelte';
    import type { RssItem } from 'src/types/RssItem'


    async function fetchRssSource(rssSource: any){  
        let sourceItems: RssItem[] = [];
        const feed = await parse(rssSource.url);
        feed.items.forEach(item => {
           let rssItem: RssItem = {title: item.title, link: item.link, pubDate: item.created};
           sourceItems.push(rssItem);
        });
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
        return sortRssItems(rssItems);
    })();
</script>

{#await news}
    <p>Loading...</p>
{:then rssItems}
    <ul class="list-disc list-inside text-left px-8">
    {#each rssItems as {title, link, pubDate}, index}
        <RssEntry rssTitle={title} rssUrl={link} rssPubDate={pubDate}/> 
    {/each}
    </ul>
{:catch error}
    <p>RSS Error</p>
{/await}
