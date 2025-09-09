import { db } from "@/config/db";
import { cache } from "react";
export const dynamic="force-dynamic";
const DynamicPage = async () => {
  const [doctor]=await myfun();
  return(
    <>
    <ul>
        {doctors.map((doctor)=>{
            return <li key={doctor.id}>{doctor.name}</li>
        })}
    </ul>
    </>
  )
};

export default DynamicPage;

const DynamicPage1 = async () => {
    const [doctor]=await myfun();
  return(
    <>
    <ul>
        {doctors.map((doctor)=>{
            return <li key={doctor.id}>{doctor.name}</li>
        })}
    </ul>
    </>
  )
};

const myfun=cache(async()=>{
[doctors] = await db.execute("SELECT * FROM doctor");
  console.log("dynmicdoctors");
  return doctors;
})
