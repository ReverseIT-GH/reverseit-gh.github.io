<script lang="ts">
  import "$lib/global.css";
  import Header from '$lib/header.svelte'
  import Footer from '$lib/footer.svelte'
</script>

<div class="root">
    <Header />
    <main>
      <slot></slot>
    </main>
    <Footer />
</div>

<style>
  .root {
        padding: 1%;
    }
</style>