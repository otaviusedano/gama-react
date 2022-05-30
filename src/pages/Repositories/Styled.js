import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  margin: 0 auto;
  width: 80%
`

export const Title = styled.h1`
  color: #226236
`

export const LinkHome = styled(Link)`
  display: block;
  text-align: center;
  margin: 12px auto;
  background-color: #f1f1f1;
  color: #000000;
  text-decoration: none
`