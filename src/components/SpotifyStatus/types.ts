export type Body = {
  currently_playing_type: string
  context: {
    href: string
    type: string
    uri: string
  }
  artists: Array<{
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    name: string
    type: string
    uri: string
  }>
  item: {
    name: string
    duration_ms: string
    preview_url: string
  }
  is_playing: boolean
  progress_ms: number
  repeat_state: string
  shuffle_state?: boolean
  timestamp: number
  external_urls: {
    spotify: string
  }
} & SpotifyApi.CurrentPlaybackResponse

export type GetMyCurrentPlaybackState = {
  body: Body
}
