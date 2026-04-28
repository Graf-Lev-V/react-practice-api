import UserItem from './UserItem'
import UserDetails from './UserDetails'
import '../src/App.css'

export default function UserList({users, selectedUser, setSelectedUser}) {
    return (
        <div className='layout'>
            <div>
                {users.map((user) => <UserItem key={user.id} user={user} setSelectedUser={setSelectedUser}/>)}
            </div>
        <UserDetails user={selectedUser}/>
        </div>
    )
}