import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Categorie from "./Categorie";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("id , name , image_url");
      console.log(data);
      if (error) console.error(error);
      else setCategories(data);
    };
    fetching();
  }, []);
  return (
    <div className="">
      <div>
        {categories.map((categorie) => (
          <Categorie />
        ))}
      </div>
    </div>
  );
};

export default Categories;
