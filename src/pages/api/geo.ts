import { NextApiRequest, NextApiResponse } from "next"
import NextCors from "nextjs-cors"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin:
      "https://bafybeie4ebv3fb7jbxtutykztm4oosdmm5fblsxnp5pdva6oi6wvh4mnka.ipfs.flk-ipfs.xyz",
    optionsSuccessStatus: 200,
  })

  res.status(200).json({ message: "Hello, FROM API!" })
}
