import * as S from "./styles"

type ProgressBarProps = {
  value: number
  total: number
}

export const ProgressBar = (props: ProgressBarProps) => {
  const { total = 10, value } = props

  const completeLevels = Array.from({
    length: value
  })
  const incompleteLevels = Array.from({
    length: total - value
  })

  return (
    <S.Progress total={total}>
      {completeLevels.map((_, index) => (
        <S.ProgressBar key={index} />
      ))}
      {incompleteLevels.map((_, index) => (
        <S.ProgressBar key={index} empty />
      ))}
    </S.Progress>
  )
}
