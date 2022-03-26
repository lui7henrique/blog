import fs from "fs"
import { NextApiRequest, NextApiResponse } from "next"
import SpotifyWebApi from "spotify-web-api-node"

export let spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  redirectUri: "http://localhost:3000/api/callback",
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const code = req.query.code as string

    const auth = await spotifyApi.authorizationCodeGrant(code)

    spotifyApi.setAccessToken(auth.body["access_token"])

    res.redirect("/")
  } catch (error) {
    console.error(error)
  }
}
