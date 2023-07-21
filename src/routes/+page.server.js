// src/routes/page.server.js
export async function load() {
  const url = 'https://dummyjson.com/products/categories';
  const res = await fetch(url);
  const results = await res.json();
  return {
    props: { categories: results },
  };
}
