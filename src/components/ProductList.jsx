import Product from "./Product";

const ProData = [ 

 {
     id: 1,
     name: "pizza",
     urlImage: 
     "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     price: 7,  
 },
 {
    id: 2,
    name: "pizza",
    urlImage: 
    "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 12,  
},
{
    id: 3,
    name: "pizza",
    urlImage: 
    "https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3,  
},
{
    id: 4,
    name: "pizza",
    urlImage: 
        "https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 6,  
},
{
    id: 5,
    name: "pizza",
    urlImage: 
    "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1,  
},
{
    id: 6,
    name: "pizza",
    urlImage: 
    "https://plus.unsplash.com/premium_photo-1679072595330-67c13052bd1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2.5,  
},

];

const ProductList  = () => {
    return  (
        <div className="grid">
         { ProData.map((product) => (
             <Product key={product.id} product={product} />
                
           ))}
    </div>
    
    );
   
};

export default ProductList;