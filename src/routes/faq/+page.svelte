<script lang="ts">
    import PageTitle from "$lib/page-title.svelte";
    import FaqEntry from '$lib/faq-entry.svelte';
    import faqIta from '$lib/data/faq/faq-ita.json';
    import faqEng from '$lib/data/faq/faq-eng.json';
    import Icon from '@iconify/svelte';
    let activeTab = 0;
</script>

<PageTitle pageTitle="FAQ" />

<div class="tabs justify-center">
    <button class="tab tab-lifted tab-lg" class:tab-active={activeTab == 0} on:click={()=>activeTab = 0}>
        <Icon icon="twemoji:flag-italy"/>
    </button> 
    <button class="tab tab-lifted tab-lg" class:tab-active={activeTab == 1} on:click={()=>activeTab = 1}>
        <Icon icon="twemoji:flag-united-kingdom"/>
    </button>
</div>

<div class="pt-4 px-20" class:hidden={activeTab != 0}>
    {#each faqIta as {title, content}, index}
        <FaqEntry faqTitle={title} faqContent = {content} />
    {/each}
</div>

<div class="pt-4 px-20" class:hidden={activeTab != 1}>
    {#each faqEng as {title, content}, index}
        <FaqEntry faqTitle={title} faqContent = {content} />
    {/each}
</div>