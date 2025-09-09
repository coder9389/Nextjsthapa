import { db } from "@/config/db";
export const revalidate=30;
const StaticPage = async () => {
  const [doctors] = await db.execute("SELECT * FROM doctor");
  console.log("staticdoctors");

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

export default StaticPage;
