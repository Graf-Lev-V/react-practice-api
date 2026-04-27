export default function UserDetails({user}) {
    
    if (!user) return <p>Select User</p>

    return (
        <div>
        {user && <p>{user.name}</p>}
        {user && <p>{user.email}</p>}
        {user && <p>{user.phone}</p>}
        {user && <p>{user.website}</p>}
        </div>
    )
}