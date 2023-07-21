// src/routes/product/+page.server.js
export async function load({ params }) {
  const { id } = params;
  const url = `https://dummyjson.com/products/${id}`;
  const res = await fetch(url);

  if (res.ok) {
    const product = await res.json();
    return {
      props: { product },
    };
  } else {
    return {
      status: 404,
    };
  }
}
