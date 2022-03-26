import { useRouter } from "next/router"
import { spotifyApi } from "pages/api/callback"
import { useCallback, useEffect, useState } from "react"
import { msToMinutes } from "utils/convertMsToMinutes"

import * as S from "./styles"
import { Body } from "./types"

type ActiveStatus = {
  name: string
  // duration_ms: number
  // progress_ms: number
}

export const SpotifyStatus = () => {
  const [activeStatus, setActiveStatus] = useState<ActiveStatus>(
    {} as ActiveStatus
  )
  const [coolDown, setCoolDown] = useState(5000) // 1 seconds

  const { push } = useRouter()

  const getActiveStatus = useCallback(async () => {
    if (Object.keys(spotifyApi.getCredentials())[0] === "access_token") {
      push("/api/login")
    }

    spotifyApi.setAccessToken(process.env.NEXT_PUBLIC_SPOTIFY_TOKEN!)

    try {
      const data = await spotifyApi.getMyCurrentPlaybackState()

      const body: Body = data.body as any

      setActiveStatus({
        name: body.item!.name
        // duration_ms: body.item!.duration_ms,
        // progress_ms: body.progress_ms!
      })

      setCoolDown(body.item.duration_ms)
    } catch (error) {
      console.error("playbackstate error: " + error)
    }
  }, [push])

  return (
    <S.SpotifyStatus>
      <S.Title>Ouvindo agora: </S.Title>
      <S.ActiveStatus>{activeStatus.name}</S.ActiveStatus>
    </S.SpotifyStatus>
  )
}
