"use client";

import { useState, useEffect, use } from "react";
import { Button } from "@/components/ui/button";
import Cards from "../_Components/Card-components";
import { useRouter } from "next/navigation";
const PAGESIZE = 12;

const Page = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [AllProducts, setAllProducts] = useState(0);
  const [InputValue, setInputValue] = useState("");
  const [Page, setPage] = useState(1);
  let skip = 0;
  if (Page > 1) {
    skip = PAGESIZE * (Page - 1);
  }
  let url = `https://dummyjson.com/products?limit=${PAGESIZE}&skip=${skip}`;
  if (InputValue !== "") {
    url = `https://dummyjson.com/products/search/?q=${InputValue}&limit=${PAGESIZE}&skip=${skip}`;
  }

  const FetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setAllProducts(data);
    setProducts(data.products);
  };
  console.log(InputValue);

  useEffect(() => {
    router.push(`?page=1`);
  }, []);
  useEffect(() => {
    FetchData();
  }, [Page, InputValue]);
  const TotalPage = Math.ceil(AllProducts.total / 12);
  const ProductArray = Array.from({ length: TotalPage }, (_, i) => i + 1);

  return (
    <div>
      <div className="flex items-center justify-center text-2xl border-2 h-15 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
        <b className="fixed "> E-commerce</b>
      </div>
      <div className="mr-50 ml-50">
        <div className="pt-10 mr-50 ml-41">
          <input
            placeholder="Search products..."
            className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive w-112"
            type="search"
            value={InputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setPage(1);
            }}
          />
        </div>
        <div className=" flex flex-wrap gap-6 justify-center pt-10 ">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm h-125 overflow-hidden transition-all hover:shadow-lg w-90  "
                onClick={() => {
                  router.push(`${product.id}`);
                }}
              >
                <Cards product={product} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex gap-3 justify-center items-center pt-10">
          <Button
            onClick={() => {
              disable = { Page };
              router.push(`?page=${Page - 1}`);
              setPage(Page - 1);
            }}
            variant={"secondary"}
          >
            {"<"}
          </Button>
          {ProductArray.map((arr, index) => {
            return (
              <div key={index}>
                <Button
                  onClick={() => {
                    router.push(`?page=${arr}`);
                    setPage(arr);
                  }}
                  variant={arr === Page ? "default" : "secondary"}
                >
                  {ProductArray[index]}
                </Button>
              </div>
            );
          })}
          <Button
            onClick={() => {
              router.push(`?page=${Page + 1} `);
              setPage(Page + 1);
            }}
            variant={"secondary"}
          >
            {">"}
          </Button>
        </div>
        <div className="mt-4 text-sm text-center text-muted-foreground">
          showing {products[0]?.id} to {products[products.length - 1]?.id} of{" "}
          {AllProducts.total} products
        </div>
      </div>
      <div className="flex items-center border-2 h-15  mt-40 ">
        <div className="text-sm text-muted-foreground  ">
          <p className="">© 2025 E-Commerce. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
