import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { api } from '../../services/api'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { HomeContainer, PublicationsContainer } from './styles'

interface User {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: number
}

interface IPosts {
  title: string
}

export function Home() {
  const [user, setUser] = useState({} as User)
  const [posts, setPosts] = useState<IPosts[]>([])

  const username = 'victorcbb'
  const repoName = 'victorcbb'

  useEffect(() => {
    async function fetchUser() {
      const userApi = await api.get(`users/${username}`)
      setUser(userApi.data)
    }

    fetchUser()
  }, [])

  const getPosts = useCallback(() => {
    try {
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`,
      )
    } finally {
    }
  }, [posts])

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
      <SearchInput />
      <PublicationsContainer>
        <Link className="card" to="/post/1">
          <div className="header">
            <strong>JavaScript data types and data structures</strong>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types:
          </p>
        </Link>
        <Link className="card" to="/post/1">
          <div className="header">
            <strong>JavaScript data types and data structures</strong>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types:
          </p>
        </Link>

        <Link className="card" to="/post/1">
          <div className="header">
            <strong>JavaScript data types and data structures</strong>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types:
          </p>
        </Link>
      </PublicationsContainer>
    </HomeContainer>
  )
}
