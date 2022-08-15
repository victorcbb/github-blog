import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 54rem;

  margin: -5.5rem 0 4rem;
  padding: 2rem 2rem 2rem 2.5rem;

  display: flex;
  align-items: flex-end;
  gap: 2rem;

  border-radius: 10px;
  background: ${({ theme }) => theme.profile};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const UserInfos = styled.div`
  width: 100%;
  height: 8.75rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .header {
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
      line-height: 1.3;
      color: ${({ theme }) => theme.title};
    }

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
    }
  }

  p {
    line-height: 1.6;

    margin: 0.5rem 0 1.5rem;
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
        color: ${({ theme }) => theme.subtitle};
        line-height: 1.6;
      }
    }
  }
`
