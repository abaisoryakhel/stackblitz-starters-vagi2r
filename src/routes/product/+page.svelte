<!-- src/routes/product/+page.svelte -->
<script context="module">
  export async function load({ page }) {
    return page;
  }
</script>

<script>
  export let product;
</script>

<div class="product-details">
  <h1>{product.title}</h1>
  <img src={product.thumbnail} alt={product.title} />
  <p>{product.description}</p>
  <p>Price: ${product.price}</p>
  <p>Discount: {product.discount}%</p>
  <p>Stock: {product.stock}</p>
  <p>Brand: {product.brand}</p>
</div>
