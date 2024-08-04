import ProductCard from "../layOut/ProductCard";
import { product } from "../utils/Data";

function Product() {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-024 mb-8">
        Our Products
      </h1>
      <div className=" flex flex-wrap gap-8">
        {product.map((data) => (
          <ProductCard src={data.src} title={data.title} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default Product;
