<script lang="ts">
    import RssReader from "$lib/rss-reader/rss-reader.svelte";
</script>

<div class="pt-8">
  <div class="flex w-full">
    <div class="grid w-1/2 h-40 card bg-base-300 rounded-box place-items-center overflow-y-auto">
      <h2 class="my-2">Latest Library Contents:</h2>
      TODO Library widget
    </div>
    <div class="divider divider-horizontal" />
    <div class="grid w-1/2 h-40 card bg-base-300 rounded-box place-items-center overflow-y-auto">
      <h2 class="my-2">Latest CyberSec News:</h2>
      <RssReader />
    </div>
  </div>
</div>

<div class="divider divider-vertical" />

<div class="pb-8">
  <div class="flex w-full">
    <div class="flex-grow card bg-base-300 rounded-box place-items-center">
      <div class="px-8 py-4">
        <h1 class="my-2">Benvenuto su ReverseIT</h1>
        <p>Questo progetto nasce con uno scopo ben preciso: essere il successore spirituale del 
          più grande sito italiano di reverse engineering creato all'alba del nuovo millennio: la UIC (Università Italiana del Cracking).</p>
        <p>Qui troverai documenti, articoli e papers tecnici su reverse engineering, malware analysis, OS internals, low level programming, 
          cyber security e molto altro, in lingua italiana o inglese.</p>
        <p>Essendo una iniziativa gestita dalla comunità, se invitato a prenderne parte, pubblicando i tuoi articoli o segnalando
          quelli che ritieni degni di nota e pertinenti alle tematiche trattate!</p>
      </div>
    </div>
  </div>
</div>
