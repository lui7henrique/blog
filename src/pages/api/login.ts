import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const client_id = process.env.SPOTIFY_CLIENT_ID

  const scope = "user-read-currently-playing"

  const redirect_uri = "http://localhost:3000/api/callback"

  res.redirect(
    "https://accounts.spotify.com/authorize" +
      "?response_type=code" +
      "&client_id=" +
      client_id +
      "&scope=" +
      scope +
      "&redirect_uri=" +
      redirect_uri
  )
}
