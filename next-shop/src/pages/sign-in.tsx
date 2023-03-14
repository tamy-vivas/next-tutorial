import Page from '../components/Page';
import Input from '../components/Input';
import Field from '../components/Field';
import Button from '../components/Button';
import { FormEventHandler, useState } from 'react';
import { fetchJson } from '../lib/api';

const SignInPage: React.FC = () => {

    const [email, setEmail] = useState('alice@example.com');
    const [password, setPassword] = useState('Alice123');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const response = await fetchJson('http://localhost:1337/auth/local', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ identifier: email, password }),
        });
        console.log('should submit', { email, password }, response);
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

                <Button type="submit">
                    Sign In
                </Button>
            </form>

        </Page>
    )
}

export default SignInPage