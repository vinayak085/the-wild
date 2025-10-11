import supabase, { supabaseUrl } from "./supabase";

export async function getCabins(){
    
let { data, error } = await supabase
  .from('cabins')
  .select('*')

  if(error)
  {
    console.error(error)
    throw new Error("cabins could not be loaded...!")
  }

  return data;
}

export async function createEditCabin(newCabin,id) {

  console.log(newCabin,id)
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/","");

  const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  //https://ilsqosskcwailsnqgtdt.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

 // 1 Create edit/cabin
 let query = supabase.from('cabins')

//A create
 if(!id)
  query = query.insert([{...newCabin,image:imagePath}])
  
  //B Edit
  if(id)
   query = query.update({...newCabin,image:imagePath})
  .eq('id', id)
  .select()

 const {data,error} = await query.select().single();

   if(error)
  {
    console.error(error)
    throw new Error("cabins could not be created.!")
  }

// 2 Upload image  

if(hasImagePath) return data;

const { error:storageError } = await supabase.storage
  .from('cabin-images')
  .upload(imageName,newCabin.image);

// 3 Delete the cabin If there was an error uploading image 
 if(storageError){
  await supabase
  .from('cabins')
  .delete()
  .eq('id', data.id);
  console.error(storageError); 
  throw new Error("cabins could not be uploaded and the cabin was not created.!")
 }

  return data 

}


export async function deleteCabin(id){
  const { error } = await supabase
  .from('cabins')
  .delete()
  .eq('id', id);

    if(error)
  {
    console.error(error)
    throw new Error("cabins could not be deleted...!")
  }

}