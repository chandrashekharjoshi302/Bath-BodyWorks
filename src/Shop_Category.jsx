import React from "react";

function ShopCategory({data}) {
  
  return (
    <>
     <div>
       <img src={data.imgurl} alt="" />
       <h4>{data.title}</h4>
     </div> 
    </>
  );
}

export default ShopCategory;
