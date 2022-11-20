<script lang="ts">
    export let rssTitle = "";
	export let rssUrl = "";
	export let rssPubDate = 0;
</script>

<li class="my-1">
    <a class="tooltip inline" data-tip="{new Date(rssPubDate).toLocaleString()}" href="{rssUrl}" target="_blank">{@html rssTitle}</a>
</li>
