import { supabase } from "./Supabase.tsx";

export async function getCategories() {
  return basicRequest('categories')
}

export async function getProducts(){
  const { data, error } = await supabase.from('products').select('id, name, description, image,categories(id,name)');
  if (error) return { data: null, error: error };
  return { data: data, error: null };
}

export async function getProduct(productId: string){
  const { data, error } = await supabase.from('products')
    .select('id, name, description, category_id')
    .eq('id', productId);
  console.log('data product: ', data)
  console.log('error product: ', error)
  if (error) return { data: null, error: error };
  return { data: data, error: null };
}

export async function getProductOptions(productId: string){
  const { data, error } = await supabase.from('productOptions')
    .select('id, name, value, product_id')
    .eq('product_id', productId);
  console.log('data productOptions: ', data)
  console.log('error productOptions: ', error)
  if (error) return { data: null, error: error };
  return { data: data, error: null };
}

async function basicRequest(database: string){
  const { data, error } = await supabase.from(database).select();
  if (error) return { data: null, error: error };
  return { data: data, error: null };
}
