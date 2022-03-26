const buff = Buffer.from(
  process.env.SPOTIFY_CLIENT_ID + ": " + process.env.SPOTIFY_CLIENT_SECRET
)

export const base64data = buff.toString("base64")
