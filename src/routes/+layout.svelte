<script lang="ts">
  import "$lib/global.css";
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<div class="overflow-none flex flex-col w-screen h-screen">
    <Header />
    <main class="p-3 flex-1 relative overflow-auto">
      <slot></slot>
    </main>
    <Footer />
</div>
