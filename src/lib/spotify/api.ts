import axios from "axios"
import querystring from "querystring"
import { GetNowPlaying } from "types/getNowPlaying"

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN

export type CurrentTrack = {
  artist: string
  image: string
  is_playing: boolean
  url: string
  title: string
}

export const getAccessToken = async () => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token
    })
  })

  return response.json()
}

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  const { data } = await axios.get<GetNowPlaying>(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  return data
}

export default async function getNowPlayingItem() {
  const nowPlaying = await getNowPlaying()

  if (!nowPlaying) {
    return null
  }

  const {
    item: { artists, album, external_urls, name },
    is_playing
  } = nowPlaying

  const track: CurrentTrack = {
    artist: artists.map((_artist: any) => _artist.name).join(", "),
    image: album.images[0].url,
    is_playing,
    url: external_urls.spotify,
    title: name
  }

  return track
}
