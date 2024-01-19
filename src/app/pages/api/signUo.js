// // Import necessary dependencies
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// // Helper function to sign JWT token
// const signToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRED_IN,
//   });
// };

// // Helper function to create and send JWT token in a cookie
// const createSendToken = (user, statusCode, res) => {
//   const token = signToken(user.id);
//   const cookieOption = {
//     expires: new Date(
//       Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true,
//   };

//   if (process.env.NODE_ENV === "production") {
//     cookieOption.secure = true;
//   }

//   user.password = undefined;
//   res.cookie("jwt", token, cookieOption);

//   res.status(statusCode).json({
//     status: "Success",
//     token,
//     data: {
//       user,
//     },
//   });
// };

// // Export named function for the POST method
// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: '1mb',
//     },
//   },
//   // Specifies the maximum allowed duration for this function to execute (in seconds)
//   maxDuration: 5,
// }
// export default async function POST(req, res) {
//   try {
//     if (req.method === "POST") {
//       const hashPassword = await bcrypt.hash(req.body.password, 10);

//       const user = await prisma.user.create({
//         data: {
//           name: req.body.name,
//           email: req.body.email,
//           password: hashPassword,
//         },
//       });

//       createSendToken(user, 201, res);
//       res.status(201).json({
//         status: "success",
//         user,
//       });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message || "Internal Server Error" });
//   }
// }
