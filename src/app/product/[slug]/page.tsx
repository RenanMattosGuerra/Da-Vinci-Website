import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const formatNumberBR = (value: number) =>
  new Intl.NumberFormat("pt-BR").format(value);

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="w-full flex-1 p-lg flex justify-center items-center">
      <div className="bg-white p-xl rounded-2xl flex flex-col md:flex-row w-full h-full max-w-4xl shadow-2xl gap-xl">
        <div className="relative md:w-1/2 overflow-hidden rounded-2xl shadow-2xl h-80 md:h-120">
          <Image
            src={product.src}
            alt={product.alt}
            fill
            className="object-cover hover:scale-120 transition-transform duration-400 object-center"
          />
        </div>
        <article className="flex flex-col md:h-120 justify-center md:w-1/2 gap-lg text-justify rounded-2xl">
          <h1 className="text-size-lg md:text-size-xl font-bold font-heading2 border-b-2 border-gray-300">
            {product.title}
          </h1>
          <p className="text-gray-500 font-text text-size-sm md:text-size-md border-b-2 border-gray-300">
            {product.description}
          </p>
          <span className="text-text font-text text-size-sm md:text-size-md border-b-2 border-gray-300">
            Material : {product.material}
          </span>
          <span className="text-text font-text text-size-sm md:text-size-md border-b-2 border-gray-300">
            Size : {product.size}
          </span>
          <div className="flex gap-md items-center">
            <span className="text-size-sm md:text-size-lg line-through text-red-800 font-text">
              ${formatNumberBR(product.discount)}
            </span>
            <span className="text-size-md md:text-size-xl font-bold text-shade-five font-text">
              ${formatNumberBR(product.price)}
            </span>
          </div>
          <button
            type="button"
            className="bg-shade-four text-shade-one font-text font-semibold py-2 px-6 rounded-2xl hover:scale-105 transition-transform duration-200 cursor-pointer shadow-2xl"
          >
            Buy
          </button>
        </article>
      </div>
    </section>
  );
}
