import { db } from "@/config/db";
import React from "react";
import { notFound } from "next/navigation";
const StaticPage = async (props) => {
  const params = props.params;

  const [rows] = await db.execute(
    `SELECT * FROM doctor WHERE id = ?`,
    [params.id]
  );

  const doctor = rows[0]; // pehla record lo

  return (
    <>
      <h1 className="m-100">{doctor.name}</h1>
      <p>Specialization: {doctor.specialization}</p>
    </>
  );
};

export default StaticPage;
