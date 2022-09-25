<script lang="ts">
    import { base } from '$app/paths';
</script>

<div class="navbar bg-base-200">
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href="{base}/">ReverseIT</a>
    </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
        <li><a href="{base}/">Home</a></li>
        <li><a href="{base}/library">Library</a></li>
        <li><a href="{base}/faq">FAQ</a></li>
        </ul>
    </div>
</div>

<style>
    .navbar {
        margin-bottom: 1%;
    }
</style>
