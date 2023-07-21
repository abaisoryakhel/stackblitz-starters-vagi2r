<!-- src/routes/category/+page.svelte -->
<script context="module">
  export async function load({ page }) {
    return page;
  }
</script>

<script>
  export let products;
</script>

<div class="main">
  <h1>Products</h1>
  {#each products as product}
    <div class="product-card">
      <h3>{product.title}</h3>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discount}%</p>
      <p>Stock: {product.stock}</p>
      <p>Brand: {product.brand}</p>
      <a href="/product/{product.id}">Details</a>
    </div>
  {/each}
</div>
