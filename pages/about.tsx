import Link from 'next/link'
import Layout from '../components/Layout'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const AboutPage = () => (
    <Layout title='About | Next.js + TypeScript Example'>
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
            <Link href='/'>
                <a>Go home</a>
            </Link>
        </p>
        <Mutation
            mutation={gql`
                mutation {
                    login(email: "test@test.com", password: "gsjanf") {
                        id
                        name
                        email
                    }
                }
            `}
        >
            {() => <button>Call the Mutation</button>}
        </Mutation>
    </Layout>
)

export default AboutPage
