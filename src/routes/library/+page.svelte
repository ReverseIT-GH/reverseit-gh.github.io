<script lang="ts">
    import PageTitle from "$lib/PageTitle.svelte";
    import Library from "$lib/library/Library.svelte";
</script>

<PageTitle pageTitle="Library" />

<Library />

<div class="flex w-full mt-4 mb-6">
    <div class="grid w-1/2 overflow-y-auto text-sm my-2.5 text-red-600">
        <p>ATTENZIONE: la categoria "Cracking" contiene esclusivamente documenti riguardanti protezioni ormai obsolete ed estremamante datate.<br>
            Non è presente alcuna informazione su protezioni commerciali attualmente adoperate.</p>
    </div>
    <div class="divider divider-horizontal" />
    <div class="grid w-1/2 overflow-y-auto text-sm my-2.5 text-red-600">
        <p>ATTENTION: the "Cracking" category contains only documents concerning protection schemes that are now obsolete and extremely dated.<br>
            There isn't any information on commercial protections currently used.</p>
    </div>
</div>