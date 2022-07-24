import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 6.25rem;
  background: ${({ theme }) => theme.colors.primary['400']};
`

export const Content = styled.div`
  width: 100%;
  max-width: 82.5rem;
  margin: auto;
  padding: 2.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LeftContent = styled.div`
  flex: 1;
`

export const RigthContent = styled.div`
  flex: 1;
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    li {
      padding: 0 1rem;
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
      transition: filter 0.6s ease-out;
      &:hover {
        filter: brightness(60%);
      }
    }
  }
`
