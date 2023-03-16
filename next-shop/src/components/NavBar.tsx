import Link from 'next/link'
import useUser from '../hooks/useUser';
import { useSignOut } from '../hooks/useSignOut';

const NavBar: React.FC = () => {

    const user = useUser();
    const signOut = useSignOut();

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
                                <button onClick={signOut}>
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