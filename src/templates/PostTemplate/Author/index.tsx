import { GetPostBySlugQuery } from "graphql/generated/graphql"
import getNowPlayingItem, { CurrentTrack } from "lib/spotify/api"
import { useRouter } from "next/router"
import { useEffect, useState, useCallback } from "react"
import { FaSpotify } from "react-icons/fa"
import { AUTHOR_IMAGE } from "utils/author/img"

import * as S from "./styles"

type AuthorProps = {
  updatedBy: GetPostBySlugQuery["posts"][0]["updatedBy"]
}

export const Author = (props: AuthorProps) => {
  const { updatedBy } = props
  const { locale } = useRouter()

  const [currentTrack, setCurrentTrack] = useState<CurrentTrack | null>(null)

  const getCurrentTrack = useCallback(async () => {
    const track = await getNowPlayingItem()

    if (track) setCurrentTrack(track)
  }, [])

  useEffect(() => {
    getCurrentTrack()
  }, [getCurrentTrack])

  return (
    <S.PostAuthor>
      <S.PostAuthorValue>
        <S.PostAuthorImageWrapper>
          <S.PostAuthorImage
            src={AUTHOR_IMAGE}
            fill
            alt={updatedBy?.name || "Luiz Henrique"}
          />
        </S.PostAuthorImageWrapper>

        <S.PostAuthorInfos>
          <S.PostAuthorName>{updatedBy?.name}</S.PostAuthorName>
          <S.PostAuthorSocialMedia
            href="https://twitter.com/lui7henrique"
            target="_blank"
          >
            @lui7henrique
          </S.PostAuthorSocialMedia>
        </S.PostAuthorInfos>
      </S.PostAuthorValue>

      {currentTrack && (
        <S.Spotify>
          <S.SpotifyLabel>
            <FaSpotify size={22} color="#1DB954" />
            {locale === "pt-BR" ? "Ouvindo agora" : "Now playing"}
          </S.SpotifyLabel>

          <S.SpotifyTrack href={currentTrack.url} target="blank">
            <S.SpotifyTrackImageWrapper>
              <S.SpotifyTrackImage
                src={currentTrack.image}
                fill
                alt={currentTrack.title}
              />
            </S.SpotifyTrackImageWrapper>

            <S.SpotifyTrackInfos>
              <S.SpotifyTrackTitle>{currentTrack.title}</S.SpotifyTrackTitle>
              <S.SpotifyTrackAuthor>{currentTrack.artist}</S.SpotifyTrackAuthor>
            </S.SpotifyTrackInfos>
          </S.SpotifyTrack>
        </S.Spotify>
      )}
    </S.PostAuthor>
  )
}
