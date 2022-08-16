import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;

  display: flex;
  justify-content: center;

  box-shadow: inset 0px -80px 100px 110px #3294f826;

  > img:first-child {
    width: 25.5625rem;
    height: 11.75rem;
    position: absolute;
    top: 4.375rem;
    left: 0;
    z-index: -1;
  }

  > img:last-child {
    width: 23.1875rem;
    height: 14.75rem;
    position: absolute;
    top: 1.875rem;
    right: 0;
    z-index: -1;
  }

  div {
    width: max-content;

    margin-top: 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    span {
      font: 400 1.5rem/1.6 'Coda', cursive;
      text-transform: uppercase;
      color: ${({ theme }) => theme.brand};
    }
  }
`
