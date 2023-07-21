<!-- src/routes/page.svelte -->
<script>
  export let data;
  let categories = data.props.categories;
</script>

<div class="main">
  <h1>Welcome to catalog</h1>
  <h1>Categories:</h1>
  <div class="container">
    {#each categories as category}
      <div class="link">
        <a href="/category/{category}">{category}</a>
      </div>
    {/each}
  </div>
</div>
