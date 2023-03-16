import Page from '../components/Page';
import Input from '../components/Input';
import Field from '../components/Field';
import Button from '../components/Button';
import { FormEventHandler, useState } from 'react';
import { useRouter } from 'next/router';
import { useSignIn } from '../hooks/useSignIn';


const SignInPage: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState('alice@example.com');
    const [password, setPassword] = useState('Alice123');
    const { signIn, signInError, signInLoading } = useSignIn();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const valid = await signIn(email, password);

        if (valid) {
            router.push('/');
        }
    }

    return (
        <Page title="Sign In ">
            <form onSubmit={handleSubmit}>
                <Field label="Email">
                    <Input type="email" required value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </Field>

                <Field label="Password">
                    <Input type="password" required value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </Field>
                {signInError && <p className="text-red-700">Invalid Credentials</p>}
                {
                    signInLoading ?
                        (<p>Loading...</p>) :
                        (
                            <Button type="submit">
                                Sign In
                            </Button>
                        )
                }
            </form>
        </Page>
    )
}

export default SignInPage