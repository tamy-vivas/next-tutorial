import Link from 'next/link'
import { useQuery } from 'react-query';
import { fetchJson } from '../lib/api';

const NavBar: React.FC = () => {

    const query = useQuery('user', async () => {
        try {
            return await fetchJson('/api/user');
        } catch (error) {
            return undefined;
        }
    }, {
        cacheTime: Infinity, // keep cache data forever
        staleTime: 30_000 //ms data is old after this value and will expire
    });

    const user = query.data;

    const handleSignOut = async () => {
        await fetchJson('/api/logout');
        // setUser({ id: undefined, name: undefined });
    };

    return (
        <nav className="px-2 py-1">
            <ul className="flex gap-2">
                <li className="text-lg font-extrabold">
                    <Link href="/">
                        Next Shop
                    </Link>
                </li>
                <li role="separator" className="flex-1" />

                {user ?
                    (
                        <>
                            <li>{user.name}</li>
                            <li>
                                <button onClick={handleSignOut}>
                                    Sign Out
                                </button>
                            </li>
                        </>
                    ) :
                    (
                        <li>
                            <Link href="/sign-in">
                                Sign In
                            </Link>
                        </li>
                    )}
            </ul>
        </nav>
    )
}

export default NavBar