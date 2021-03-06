import Link from "next/Link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../services";
import { Category } from "../types/post";

const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    getCategories().then((cats) => setCategories(cats));
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-grey-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-grey">
              Viki Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((cat, index) => (
            <Link key={index} href={`/category/${cat.slug}`}>
              <span className="md:float-right mt-2 align-middle text-grey ml-4 font-semibold cursor-pointer">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
