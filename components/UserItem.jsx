export default function UserItem({user, name, email, setSelectedUser}) {
    return (
        <>
        <p onClick={() => setSelectedUser(user)}>{name}</p>
        <p>{email}</p>
        </>
    )
}