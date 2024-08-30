// import React from 'react'
// import { useSelector } from 'react-redux'

// const ProductComponents = () => {
//   const products= useSelector((state)=>state.allProducts.products)
// const Renderlist = products.map((product)=>{
//   const {id,title,image,price,category}=product;
//   return (
//     <div className='grid md:grid-cols-1 mt-32 m-auto' key={id}>
//     <div className="w-[250px] h-[650px] shadow-xl rounded-lg bg-slate-300 ">
//       <div className="">
//         <div className=" w-full h-48 object-cover">
//           <img src={image} alt={title} />
//         </div>
//         <div className="mt-80 p-2 text-xl flex flex-col items-center font-bold justify-center text-center gap-1">
//           <div className="">{title}</div>
//           <div className="meta price">Price: ${price}</div>
//           <div className="meta">{category}</div>
//         </div>
//       </div>
//     </div>


//   </div>
//   )
// })
//   return (
//    <>
//    {Renderlist}
//    </>
//   )
// }

// export default ProductComponents
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);



  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 my-5 lg:grid-cols-4  '>
      {products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
         
            <div className='' key={id}>
              <Link to={`/product/${id}`}>

                <div className="w-[250px] h-[400px] shadow-xl rounded-lg bg-slate-300 m-auto">
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-full h-[200px] flex  justify-center items-center">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4  font-bold text-center p-2 flex flex-col items-center justify-center">
                      <div>{title}</div>
                      <div className="meta price">Price: ${price}</div>
                      <div className="meta">{category}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
     
        );
      })}

    </div>
  );
}

export default ProductComponents;
