import { NextResponse } from "next/server";

 async function GET() {
    return NextResponse.json({ name: "John Doe" });
}

export default GET