import { Tech } from "components/Tech"
import { Techs as TechsType } from "graphql/generated/graphql"
import { useRouter } from "next/router"
import { v4 } from "uuid"

import * as S from "./styles"

type TechsProps = {
  techs: TechsType[]
}

export const Techs = (props: TechsProps) => {
  const { techs } = props

  const { locale } = useRouter()

  return (
    <S.PostsTech>
      <S.PostTechsLabel>{locale ? "Tech's" : "Technologies"}</S.PostTechsLabel>
      <S.PostTechsList>
        {techs.map((tech) => (
          <Tech tech={tech} rounded={false} key={v4()} />
        ))}
      </S.PostTechsList>
    </S.PostsTech>
  )
}
