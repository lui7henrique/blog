import { NextApiRequest, NextApiResponse } from "next"

import { spotifyApi } from "./callback"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const scopes = [
    "user-read-private",
    "user-read-currently-playing",
    "user-read-playback-state"
  ]

  const state = "some-state-of-my-choice"

  const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state)

  res.redirect(authorizeURL)
}
