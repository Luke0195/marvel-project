import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  width: 100%;
  max-width: 26.125rem;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.colors.primary};
`
