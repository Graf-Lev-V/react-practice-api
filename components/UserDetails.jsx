export default function UserDetails({user}) {
    
    if (!user) return <p>Select User</p>

    return (
        <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
        </div>
    )
}