import { NextResponse } from "next/server";
import User from '../../../../models/user';

export const  GET = async (req,res)=>{
  try {
    const users = await User.findAll();
    console.log(users)
    return NextResponse.json({ status : 'success',users});
} catch (error) {
  return NextResponse.json({ message: 'Internal Server Error' });
}
}