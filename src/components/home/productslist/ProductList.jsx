import { useEffect, useState } from "react";
import { SeeProductButton, ShopButton } from "../../Button";
import ZX9_Speaker from "/shared/desktop/image-category-thumbnail-speakers.png"

function ProductList() {
  const [products, setProducts] = useState([]);
  const categoriesToDisplay = ["headphones", "speakers", "earphones"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/data.json`);
        const data = await response.json();
        console.log("Products:", data);

        // Filter products based on categories
        const filteredProducts = data.filter((product) =>
          categoriesToDisplay.includes(product.category)
        );

        setProducts(filteredProducts);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("Products:", products);

  return (
    <>
      <div className="pt-10 pb-32 px-4">
        {products.map((product) => (
          <div key={product.id} className="">
            <img src={product.image.mobile} alt={product.name} />
            <p className="mb-4 text-[#000] text-lg uppercase font-bold text-center tracking-[1.286px]">
              {product.category}
            </p>
            <ShopButton />
          </div>
        ))}
        <div className="lg:flex lg:pb-10 lg:gap-32 lg:pt-24 lg:px-24 lg:mt-24 lg:mx-32 py-16 px-6 mt-32 mb-8 bg-[#D87D4A] rounded-lg border border-solid border-[#D87D4A]">
         <div className=" lg:justify-start lg:items-start flex justify-center items-center"><img src={ZX9_Speaker} alt="ZX9_Speaker" /></div>
         <div>
         <p className="md:text-4xl md:tracking-[2px] mb-6 text-[#FFF] text-center text-4xl font-bold leading-[40px] tracking-[1.286px] uppercase">ZX9 <br/> SPEAKER</p>
         <p className="mb-6 text-[#FFF] text-center text-base font-medium leading-[25px]">
         Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
         </p>
         <SeeProductButton />
         </div>
       </div>
      </div>
    </>
  );
}

export default ProductList;
