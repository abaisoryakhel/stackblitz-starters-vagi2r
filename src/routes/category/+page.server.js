// src/routes/category/+page.server.js
export async function load({ params }) {
  const { category } = params;
  const url = `https://dummyjson.com/products/category/${category}`;
  const res = await fetch(url);

  if (res.ok) {
    const results = await res.json();
    return {
      props: { products: results },
    };
  } else {
    return {
      status: 404,
    };
  }
}
