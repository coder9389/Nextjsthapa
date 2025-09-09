import { db } from "@/config/db";
import React from "react";

const StaticPage = async (props) => {
  // props.params se id le lo
  const params = props.params;

  const [rows] = await db.execute(
    `SELECT * FROM doctor WHERE id = ?`,
    [params.id]
  );

  console.log(rows);

  return (
    <>
      <ul>
        {rows.map((doctor) => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul>
    </>
  );
};

export default StaticPage;
