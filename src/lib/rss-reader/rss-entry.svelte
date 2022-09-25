<script lang="ts">
    export let rssTitle = "";
	export let rssUrl = "";
	export let rssPubDate = 0;
</script>

<li class="my-1">
	<div class="tooltip" data-tip="{new Date(rssPubDate).toLocaleString()}">
		<h3><a class="link" href="{rssUrl}" target="_blank">{@html rssTitle}</a></h3>
	</div>
</li>