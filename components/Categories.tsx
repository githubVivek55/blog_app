import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../services";
import { Category } from "../types/post";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    getCategories().then((cats) => setCategories(cats));
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((cat) => (
        <Link key={cat.slug} href={`/category/${cat.slug}`}>
          <span className="cursor-pointer block pb-3 mb-3">{cat.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
