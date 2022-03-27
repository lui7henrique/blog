import { Button } from "components/Button"
import { useRouter } from "next/router"
import { FaLanguage } from "react-icons/fa"

type ButtonLanguageProps = {
  isPost?: boolean
  postSlug?: string
}

export const ButtonLanguage = (props: ButtonLanguageProps) => {
  const { isPost, postSlug, ...rest } = props
  const { asPath, push, locale } = useRouter()

  const handleChangeLocale = async (locale: "pt-BR" | "en-US") => {
    if (isPost) {
      push(`/posts/${postSlug}`, `/posts/${postSlug}`, { locale: locale })
      localStorage.setItem("locale", locale)

      return
    }

    localStorage.setItem("locale", locale)
    push(asPath, asPath, { locale: locale })
  }

  return (
    <Button
      label={locale! === "en-US" ? "English" : "Português"}
      onClick={() => handleChangeLocale(locale === "pt-BR" ? "en-US" : "pt-BR")}
      fontSize="sm"
      rightIcon={FaLanguage}
      {...rest}
    />
  )
}
