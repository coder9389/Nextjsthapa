const blob=async (props)=>{
    const {slug}=await props.params;
    console.log(slug);
return(
<h1 className="m-100">{slug[2]}</h1>
);
}
export default blob;