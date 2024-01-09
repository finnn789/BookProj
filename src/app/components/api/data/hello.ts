import type { NextApiRequest,NextApiResponse } from 'next'

type Data = {
  status:boolean,
  statusCode: Number,
  data : { 
    id: number,
    name: string}[];
  
}

const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
]

export default function handler (req : NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ status : true,statusCode :200, data})
}
