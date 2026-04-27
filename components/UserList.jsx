import UserItem from './UserItem'
import UserDetails from './UserDetails'

export default function UserList({users, selectedUser, setSelectedUser}) {
    return (
        <div className='layout'>
            <div>
                {users.map((user) => <UserItem key={crypto.randomUUID()} user={user} name={user.name} email={user.email} setSelectedUser={setSelectedUser}/>)}
            </div>
        <UserDetails user={selectedUser}/>
        </div>
    )
}