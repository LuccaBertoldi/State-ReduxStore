export const fetchProductsFromAPI = async () => {
    const response = await fetch('/api/products'); 
    return response.json();
  };
  