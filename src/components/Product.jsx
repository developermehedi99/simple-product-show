
const Product = ({product}) => {
    const {image, title, rating, description} = product;
    return (
        <div className="bg-[#2c2c2c] text-white font-bold p-5">
            <img className="w-full h-1/3" src={image} alt="" />
            <h1 className="text-xl font-bold">{title}</h1>
            <h2 className="text-[#ff8a22] my-3">rating: {rating}</h2>
            <p>{description}</p>
            <button className="btn my-3 bg-neutral-700 rounded-md py-2 px-3">Add to cart</button>
        </div>
    );
};

export default Product;