import { useState, useEffect } from 'react'
import Search from '../components/Search'
import UserList from '../components/UserList'

export default function App() {
  
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)

  const filteredUsers = search ? users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase())) : users

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
      }
      catch (error) {
        setError(error.message)
      }
      finally {
        setLoading(false)
      }
  })()}, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <>
    <Search search={search} setSearch={setSearch}/>
    <UserList users={filteredUsers} selectedUser={selectedUser} setSelectedUser={setSelectedUser}></UserList>
    </>
  )
}