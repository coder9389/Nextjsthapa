const post =async (props)=>{
const id=await props.params;
console.log(id);
return <h1 className='m-100'>{id.username} {id.postid}</h1>
}
export default post;