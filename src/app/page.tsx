import fetchData from "@/Data/fetchData";
import CardComponentV2 from "@/components/CardComponent/CardComponentV2";
import CarouselComponent from "@/components/CarouselComponent";
import CustomCardCompo from "@/components/CustomCardCompo";
import { productType } from "@/types/productTypes";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Products",
  description: "This is Product Page Shop",
  keywords: ["shop", "ecommerce", "sell"],
};
export default async function Home() {
  const proItems2 = await fetchData();
  return (
    <main>
      <CarouselComponent/>
      <CustomCardCompo/>
      <div className="w-[90%] mx-auto font-medium text-primaryColor text-4xl">
        Our Collection
      </div>
      <section className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-[40px] ">
        {proItems2.map((item: productType) => (
          <Link href={`/product/${item.id}`} key={item.id}>
            <CardComponentV2
              image={item.image}
              name={item.name}
              price={item.price}
              desc={item.desc}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
