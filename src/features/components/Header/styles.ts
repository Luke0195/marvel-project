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

  @media (max-width: 1414px) {
    width: 68.75rem;
  }

  @media (max-width: 1170px) {
    width: 56.25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-around;
  }
`

export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    margin-left: 4.875rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 28.5rem;
    height: 3.063rem;
    background: red;
    background-color: #5c5c5c;
    padding-right: 0.5rem;

    input {
      flex: 1;
      height: 100%;
      padding: 0 0.5rem;
      border: 0;
      background: transparent;
      &::placeholder {
        color: ${(props) => props.theme.colors.white};
      }
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${(props) => props.theme.colors.white};
      cursor: pointer;
    }
  }

  @media (max-width: 1408px) {
    div {
      width: 18.75rem;
      input {
        font-size: 0.8rem;
      }
    }
  }
  @media (max-width: 1170px) {
    flex: none;

    div {
      display: none;
    }
  }
`

export const RigthContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ul {
    flex: 1;
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
      margin-right: 1rem;
    }
  }

  @media (max-width: 1170px) {
    ul {
      display: none;
    }
  }

  @media (max-width: 1170px) {
    flex: none;
  }
`

export const Menu = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 1170px) {
    display: block;
  }
`
