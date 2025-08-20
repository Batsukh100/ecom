"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Cards from "./_Components/Card-components";
import { useRouter } from "next/navigation";
const Page = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const FetchData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=4");
    const data = await response.json();
    setProducts(data.products);
    console.log(products);
  };
  const handleViewAllProductsClick = () => {
    router.push("/products");
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-center text-2xl border-2 h-15 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
        <b className="fixed "> E-commerce</b>
      </div>
      <div>
        <div className="pt-50 flex  flex-col items-center text-4xl">
          <b>Featured Products</b>
          <div className="text-xl text-gray-500">
            Check out our most popular items that customers love.
          </div>
        </div>
      </div>
      <div className=" flex gap-4 justify-center pt-10">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm h-125 overflow-hidden transition-all hover:shadow-lg w-90 "
              onClick={() => {
                router.push(`${product.id}`);
              }}
            >
              <Cards product={product} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center pt-10">
        <Button onClick={handleViewAllProductsClick}>View All Products</Button>
      </div>
      <div className="flex items-center border-2 h-15 mt-40 ">
        <div className="text-sm text-muted-foreground  ">
          <p className="">© 2025 E-Commerce. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
export default Page;
