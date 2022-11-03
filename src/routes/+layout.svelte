<script lang="ts">
  import "$lib/global.css";
  import Header from '$lib/header.svelte'
  import Footer from '$lib/footer.svelte'
</script>

<div class="overflow-none flex flex-col w-screen h-screen">
    <Header />
    <main class="p-3 flex-1 relative overflow-scroll">
      <slot></slot>
    </main>
    <Footer />
</div>
