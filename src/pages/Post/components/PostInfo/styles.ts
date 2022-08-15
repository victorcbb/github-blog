import styled from 'styled-components'

export const PostInfoContainer = styled.section`
  width: 100%;
  max-width: 54rem;

  margin: -5.5rem 0 4rem;
  padding: 2rem 2rem 2rem 2.5rem;

  border-radius: 10px;
  background: ${({ theme }) => theme.profile};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 24px;
    line-height: 130%;
    color: ${({ theme }) => theme.title};

    margin: 1.25rem 0 0.5rem;
  }

  .header {
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      text-decoration: none;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 1.6;
      color: ${({ theme }) => theme.brand};
      cursor: pointer;
    }
  }

  .footer {
    display: flex;
    gap: 1.5rem;

    .content-infos {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        width: 1.125rem;
        height: 1.125rem;
      }

      span {
        color: ${({ theme }) => theme.span};
        line-height: 0;
      }
    }
  }
`
