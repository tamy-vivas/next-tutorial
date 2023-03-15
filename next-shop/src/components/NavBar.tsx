import Link from 'next/link'
import { useState, useEffect, FormEventHandler } from 'react';
import { fetchJson } from '../lib/api';

const NavBar: React.FC = () => {
    const [user, setUser] = useState({ id: undefined, name: undefined });

    useEffect(() => {
        (async () => {
            try {
                const user = await fetchJson('/api/user');
                setUser(user);
            } catch (error) {
                // not signed in
            }
        })();
    }, [])


    const handleSignOut = async () => {
        await fetchJson('/api/logout');
        setUser({ id: undefined, name: undefined });
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