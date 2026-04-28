export default function UserItem({user, setSelectedUser}) {
    return (
        <>
        <p onClick={() => setSelectedUser(user)}>{user.name}</p>
        <p>{user.email}</p>
        </>
    )
}