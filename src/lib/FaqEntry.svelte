<script lang="ts">
    export let faqTitle = "";
    export let faqContent = "";
</script>


<div class="collapse collapse-arrow m-0.5">
    <input type="checkbox" /> 
    <div class="collapse-title text-reverseit-faq-title text-xl font-medium">
        {@html faqTitle}
    </div>
    <div class="collapse-content"> 
        <p>{@html faqContent}</p>
    </div>
</div>

<div class="divider divider-vertical" />