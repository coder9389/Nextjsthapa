const products=async ({searchParams})=>{
 const searchparams=await searchParams;
// console.log(serchparams);
const category=searchparams?.category||"all";
const sort=searchparams?.sort||"default";
const page=searchparams?.page||1;
return(
    <h1 className="m-100">{category} {sort} {page}</h1>
)
}
export default products;