import Page from '../components/Page';
import Input from '../components/Input';
import Field from '../components/Field';
import Button from '../components/Button';
import { FormEventHandler, useState } from 'react';
import { fetchJson } from '../lib/api';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';


const SignInPage: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState('alice@example.com');
    const [password, setPassword] = useState('Alice123');
    const queryClient = useQueryClient();

    const mutation = useMutation(async () =>
        fetchJson('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })
    );


    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        try {
            const user = await mutation.mutateAsync();
            queryClient.setQueryData('user', user); // set user into the cache, and prevent stale tieme of 30 secons
            console.log('signed in:', user);
            router.push('/');
        } catch (error) {
            // mutation.isError will be true
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
                {mutation.isError && <p className="text-red-700">Invalid Credentials</p>}
                {
                    mutation.isLoading ?
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