import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Bhawesh@123",  // yeh wahi password jo tumne ALTER USER se set kiya
  database: "doctor_db",
});

try {
  const connection = await db.getConnection();
  console.log("✅ Database connection established");
  connection.release();
} catch (err) {
  console.error("❌ Connection failed:", err);
  process.exit(1);
}
