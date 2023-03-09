import { styled } from '@mui/material/styles'

type CustomLinkPropsType = {
  colorText?: string
  align?: string
  justifySelf?: string
}

export const LinkWrapper = styled('span')<CustomLinkPropsType>`
  display: flex;
  justify-content: ${({ justifySelf }) => justifySelf || 'center'};
  width: 100%;
  a {
    color: ${({ colorText }) => colorText || '#366eff'};
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5;
    text-align: ${({ align }) => align || 'center'};
  }
`
