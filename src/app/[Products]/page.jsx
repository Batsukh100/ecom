"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cards from "../_Components/Card-components";
import { Button } from "@/components/ui/button";

const Page = () => {
  const router = useRouter();
  const param = useParams();
  const Products = param.Products;
  const [productInfo, setProductInfo] = useState([]);
  const [FilProduct, setFilProduct] = useState([]);
  const FetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products/${Products}`);
    const data = await response.json();
    setProductInfo(data);
  };
  const FilData = async () => {
    console.log("working fildata");
    const res2 = await fetch(
      `https://dummyjson.com/products/category/${productInfo?.category}?limit=4`
    );
    const data2 = await res2.json();
    setFilProduct(data2.products);
  };

  useEffect(() => {
    FetchData();
  }, []);
  useEffect(() => {
    console.log("working useeef");
    FilData();
  }, [productInfo]);

  return (
    <div>
      <div className="flex items-center justify-center text-2xl border-2 h-15 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
        <b className="fixed "> E-commerce</b>
      </div>
      <div className="ml-50 ">
        <div className="font-bold">
          Home/Products/{productInfo?.title || "Loading..."}{" "}
        </div>
        <div>
          <Button
            onClick={() => {
              router.push("/products");
            }}
          >
            Back
          </Button>
        </div>
        <div className="flex gap-10   ">
          <div>
            <img
              src={productInfo.images?.[0]}
              className="w-[742px] h-[742px] bg-amber-50"
            />
          </div>
          <div className="w-[748px] h-[748px] flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-bold">{productInfo?.title} </h1>{" "}
              <span className="text-sm text-muted-foreground">
                Brand: <span className="font-medium">{productInfo?.brand}</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold">${productInfo?.price}</div>
              <div className="px-2 py-1 text-sm text-green-800 bg-green-100 rounded-full">
                10% OFF
              </div>
            </div>
            <p>{productInfo?.description}</p>
            <div>
              <div>
                <p className="text-sm font-medium">
                  Availability:
                  <span className="text-green-600 ml-1">
                    In Stock ({productInfo.stock} available)
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div className="block mb-2 text-base font-medium">Quantity</div>
              <select className="w-24 h-10 border-1 solid rounded-xl">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[&gt;svg]:px-4 sm:flex-1"
              >
                Add to Cart
              </button>
              <button
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[&gt;svg]:px-4 sm:flex-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart w-4 h-4 mr-2"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
                Add to Wishlist
              </button>
            </div>
            <div className="pt-4 space-y-3 border-t">
              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-truck h-5 w-5 mt-0.5 text-muted-foreground"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                  <path d="M15 18H9"></path>
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                  <circle cx="17" cy="18" r="2"></circle>
                  <circle cx="7" cy="18" r="2"></circle>
                </svg>
                <div>
                  <p className="font-medium">Free Shipping</p>
                  <p className="text-sm text-muted-foreground">
                    Free standard shipping on orders over $50
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield h-5 w-5 mt-0.5 text-muted-foreground"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <div>
                  <p className="font-medium">30-Day Returns</p>
                  <p className="text-sm text-muted-foreground">
                    Shop with confidence with our 30-day return policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="font-bold text-3xl">Releated Products</div>
          <div className=" flex flex-wrap gap-6 pt-10 ">
            {FilProduct.map((product) => {
              console.log("cards-component");

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
        </div>
      </div>
      <div className="flex items-center border-2 h-15  mt-40 ">
        <div className="text-sm text-muted-foreground ">
          <p className="">© 2025 E-Commerce. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
