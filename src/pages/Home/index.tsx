import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from '../../components/Spinner'

import { api } from '../../services/api'
import { relativeDateFormatter } from '../../utils/formatter'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { HomeContainer, PublicationsContainer } from './styles'

export interface User {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: number
}

export interface IPosts {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Home() {
  const [user, setUser] = useState({} as User)
  const [posts, setPosts] = useState<IPosts[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const username = import.meta.env.VITE_GITHUB_USERNAME
  const repoName = import.meta.env.VITE_GITHUB_REPONAME

  useEffect(() => {
    async function fetchUser() {
      const userApi = await api.get(`users/${username}`)
      setUser(userApi.data)
    }

    fetchUser()
  }, [username])

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`,
        )

        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
    },
    [username, repoName],
  )

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <HomeContainer>
      <Profile
        avatar={user.avatar_url}
        userName={user.name}
        url={user.html_url}
        bio={user.bio}
        userLogin={user.login}
        company={user.company}
        followers={user.followers}
      />
      <SearchInput getPosts={getPosts} postLength={posts.length} />
      {isLoading ? (
        <Spinner />
      ) : (
        <PublicationsContainer>
          {posts.map((post) => (
            <Link
              className="card"
              to={`/post/${post.number}`}
              key={post.number}
            >
              <div className="header">
                <strong>{post.title}</strong>
                <span>{relativeDateFormatter(post.created_at)}</span>
              </div>
              <p>{post.body}</p>
            </Link>
          ))}
        </PublicationsContainer>
      )}
    </HomeContainer>
  )
}
