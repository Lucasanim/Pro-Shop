import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@admin.com",
    password: bcrypt.hashSync("1234567", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "jhon@Doe.com",
    password: bcrypt.hashSync("1234567", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@doe.com",
    password: bcrypt.hashSync("1234567", 10),
  },
];
export default users;
