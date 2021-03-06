import Link from 'next/link'
import Layout from '../components/Layout'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const IndexPage = () => (
    <Layout title='Home | Next.js + TypeScript Example'>
        <h1>Hello Next.js! 👋</h1>
        <p>
            <Link href='/about'>
                <a>About</a>
            </Link>
        </p>
        <Mutation
            mutation={gql`
                mutation {
                    login(email: "test@test.com", password: "gsjanf") {
                        name
                        email
                    }
                }
            `}
        >
            {(mutate: () => void) => <button onClick={async() => {
              const response = mutate()
              console.log({response})
            }}> Call the Mutation</button>}
        </Mutation>
    </Layout>
)

export default IndexPage
