<script lang="ts">
    import { base } from '$app/paths';
    import { onMount } from "svelte";
    let availableLogos: string[] = [
        'cfrevolution.png',
        'monsters.png',
        'wholecar.png'
    ];

    const randomLogo = getRandomLogo();

    async function getRandomLogo() {
        console.log('getRandomLogo called!');
        return availableLogos[Math.floor(Math.random() * availableLogos.length)];
    }
</script>

<div class="navbar mb-4 bg-base-200">
    <div class="flex-1">
        {#await randomLogo then logo}
            <a href="{base}/"><img src="header_logo/{logo}" alt="ReverseIT"></a>
        {/await}
    </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
        <li><a href="{base}/">Home</a></li>
        <li><a href="{base}/library">Library</a></li>
        <li><a href="{base}/faq">FAQ</a></li>
        </ul>
    </div>
</div>
