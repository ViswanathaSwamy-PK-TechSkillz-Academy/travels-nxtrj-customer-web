import Logo from './Logo';
import Search from './Search';
import UserActions from './UserActions';

export default async function Navbar() {
    const user = { username: 'John Doe', name: 'John Doe', id: "1" };

    return (
        <header className='sticky top-0 z-50 flex justify-between bg-white p-3 items-center text-blue-800 shadow-md shadow-gray-400'>
            <Logo />
            <Search />
            {user ? (
                <UserActions user={user} />
            ) : (
                <h1>Not Logged</h1>
            )}
        </header>
    );
}
