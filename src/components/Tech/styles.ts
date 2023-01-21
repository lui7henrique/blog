import Image from "next/image"
import { styled } from "styles"
// import styled, { css } from "styled-components"

export const ProjectTech = styled("li", {
  variants: {
    rounded: {
      true: {
        borderRadius: "$md"
      }
    }
  },

  background: "$gray800",
  padding: "$2 $4",

  display: "flex",
  alignItems: "center",
  gap: "$2",

  transition: "all 0.2s ease-in-out"
})

export const ProjectTechIcon = styled(Image)

export const ProjectTechLabel = styled("span", {
  fontSize: "$xs"
})

// export const ProjectTech = styled.li<{
//   rounded?: boolean
// }>`
//   background: ${({ theme }) => theme.colors.shape};

//   padding: ${({ theme }) => theme.space["2"]} ${({ theme }) => theme.space["4"]};

//   display: flex;
//   align-items: center;
//   gap: ${({ theme }) => theme.space["2"]};

//   transition: all 0.2s ease-in-out;

//   ${({ rounded }) =>
//     rounded &&
//     css`
//       border-radius: 15px;
//     `}
// `

//
