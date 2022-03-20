import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

export const Container = styled.section`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  padding-right: ${({ theme }) => theme.space["10"]};
  padding-left: ${({ theme }) => theme.space["10"]};

  padding-bottom: ${({ theme }) => theme.space["10"]};

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space["8"]} ${({ theme }) => theme.space["4"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Post = styled(Link)`
  display: flex;
  flex-direction: column;
`

export const PostThumbnailWrapper = styled.figure`
  width: 100%;
  aspect-ratio: 16 / 9;
  position: relative;

  border: 1px solid ${({ theme }) => theme.colors.shape};

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`

export const PostThumbnail = styled(Image)`
  width: 100%;
  height: 100%;

  object-fit: cover;
  transition: transform 0.2s ease-in-out;
`

export const PostHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["lg"]};
`

export const PostAuthor = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space["2"]};
  margin-top: ${({ theme }) => theme.space["3"]};
`

export const PostAuthorAvatarWrapper = styled.figure`
  width: ${({ theme }) => theme.space["9"]};
  height: ${({ theme }) => theme.space["9"]};

  border-radius: 50%;
  position: relative;
  overflow: hidden;
`

export const PostAuthorAvatar = styled(Image)`
  width: 100%;
  height: 100%;

  object-fit: cover;
`

export const PostAuthorInfos = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostAuthorName = styled.span``

export const PostUpdateAtTime = styled.sub``

export const PostAbstract = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const PostInfos = styled.div`
  margin-top: ${({ theme }) => theme.space["3"]};
`
