import Rating from "@/components/Rating";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const Details = ({ product }) => {
  const { title, image, category, rating, price, description } = product;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="max-w-screen-xl mx-auto px-5 my-20">
        <div className="grid w-full md:grid-cols-2 gap-10">
          <div className="border px-5 py-20 rounded-lg">
            <div className="relative w-full h-[300px]">
              <Image
                src={image}
                fill
                className="w-full h-full object-contain"
                alt={title}
              />
            </div>
          </div>
          <div>
            <span className="uppercase text-gray-400 text-sm font-normal block mb-2">
              {category}
            </span>
            <h2 className="text-[20px] font-medium mb-3 mt-2">{title}</h2>
            <Rating rating={rating} />
            <h2 className="text-2xl font-semibold mt-3">${price}</h2>
            <p className="mt-6 text-gray-500 leading-[22px]">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
export async function getServerSideProps(context) {
  const {
    query: { id },
  } = context;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  let product = await response.json();
  return {
    props: {
      product,
    },
  };
}
