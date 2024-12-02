import { useState } from "react";

import OurProducts from "./OurProducts";
import { useLoaderData } from "react-router-dom";

function Home() {
  const loadedProducts = useLoaderData();
  const [coffees, setCoffees] = useState(loadedProducts);
  return (
    <main>
      <section className="bg-our-products   bg-cover bg-center my-28">
        <h3 className="text-center text-xl text-[#1B1A1A] font-raleway  py-10">
          --- Sip & Savor ---
        </h3>
        <h2 className="text-center text-text-btn text-[55px] font-rancho">
          Our Popular Products
        </h2>
        <div className="mt-28 px-36 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {coffees.map((product) => (
            <OurProducts
              key={product._id}
              product={product}
              coffees={coffees}
              setCoffees={setCoffees}
            ></OurProducts>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
