import getUsers from "./handler"

export async function GET() {
  const res = await fetch('http://localhost:3000/api', {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()
 console.log(data)
  return Response.json({ data })
}