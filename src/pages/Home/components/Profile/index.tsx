import { ProfileContainer, UserInfos } from './styles'
import arrowUpRightImg from '../../../../assets/arrow-up-right.svg'
import githubImg from '../../../../assets/github-brand.svg'
import buildingImg from '../../../../assets/building.svg'
import followsImg from '../../../../assets/follows.svg'

interface ProfileProps {
  avatar: string
  userName: string
  url: string
  bio: string
  userLogin: string
  company?: string
  followers: number
}

export function Profile({
  avatar,
  userName,
  url,
  bio,
  userLogin,
  company,
  followers,
}: ProfileProps) {
  return (
    <ProfileContainer>
      <img src={avatar} alt="Imagem do usuário" />
      <UserInfos>
        <div className="header">
          <strong>{userName}</strong>
          <a href={url} target="_blank" rel="noreferrer">
            github
            <img src={arrowUpRightImg} alt="" />
          </a>
        </div>
        <p>{bio}</p>
        <div className="footer">
          <div className="content-infos">
            <img src={githubImg} alt="" />
            <span>{userLogin}</span>
          </div>
          {company && (
            <div className="content-infos">
              <img src={buildingImg} alt="" />
              <span>{company}</span>
            </div>
          )}
          <div className="content-infos">
            <img src={followsImg} alt="" />
            <span>{followers} seguidores</span>
          </div>
        </div>
      </UserInfos>
    </ProfileContainer>
  )
}
