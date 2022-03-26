import { useRouter } from "next/router"
import { spotifyApi } from "pages/api/callback"
import { useCallback, useEffect, useState } from "react"

import * as S from "./styles"
import { Body } from "./types"

type ActiveStatus = {
  name: string
  artists: string[]
}

export const SpotifyStatus = () => {
  const [activeStatus, setActiveStatus] = useState<ActiveStatus>(
    {} as ActiveStatus
  )
  const [coolDown, setCoolDown] = useState(1) // 1 seconds

  const { push, locale } = useRouter()

  const getActiveStatus = useCallback(async () => {
    if (Object.keys(spotifyApi.getCredentials())[0] === "access_token") {
      push("/api/login")
    }

    spotifyApi.setAccessToken(process.env.NEXT_PUBLIC_SPOTIFY_TOKEN!)

    try {
      const data = await spotifyApi.getMyCurrentPlaybackState()

      const body: Body = data.body as any
      console.log(body)

      setActiveStatus({
        name: body.item!.name,
        artists: body.item.artists.map((artists) => artists.name)
      })

      setCoolDown(body.item.duration_ms - body.progress_ms!)
    } catch (error) {
      console.error("playbackstate error: " + error)
    }
  }, [push])

  useEffect(() => {
    const activeStatus = setInterval(() => {
      getActiveStatus()
    }, coolDown)

    return () => clearInterval(activeStatus)
  }, [getActiveStatus, coolDown])

  return (
    <S.SpotifyStatus>
      <S.Title>
        {locale === "pt-BR" ? "Ouvindo agora:" : "Listening now:"}
      </S.Title>

      {Object.values(activeStatus).length >= 2 && (
        <S.ActiveStatus>
          {activeStatus.name}
          <S.ActiveStatusArtistsContainer>
            <S.ActiveStatusArtists
              hasFadeRight={activeStatus.artists.join(", ").length > 25}
            >
              {activeStatus.artists.join(", ")}
            </S.ActiveStatusArtists>
          </S.ActiveStatusArtistsContainer>
        </S.ActiveStatus>
      )}
    </S.SpotifyStatus>
  )
}
