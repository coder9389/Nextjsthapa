const dynamic=async (props)=>{
    const user=await props.params;
    console.log(user);
return <h1 className='m-100'>{user.username}</h1>
}
export default dynamic; 