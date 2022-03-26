import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"

import { base64data } from "./configs"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const auth_code = req.query.code

  res.status(200).json({ code: auth_code })
}
