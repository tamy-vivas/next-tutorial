import Page from '../components/Page';
import Input from '../components/Input';
import Field from '../components/Field';
import Button from '../components/Button';

const SignInPage: React.FC = () => {
    return (
        <Page>

            <form>
                <Field label="Email">
                    <Input type="email" />
                </Field>

                <Field label="Password">
                    <Input type="password" />
                </Field>

                <Button type="submit">
                    Sign In
                </Button>
            </form>

        </Page>
    )
}

export default SignInPage