import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

type CustomLinkPropsType = {
  color?: string
  align?: string
}

export const CustomLink = styled(Link)<CustomLinkPropsType>`
  color: ${({ color }) => color || '#366eff'};
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;
  text-align: ${({ align }) => align || 'center'};
`
