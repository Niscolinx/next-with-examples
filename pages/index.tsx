import Link from 'next/link'
import Layout from '../components/Layout'
import { Mutation } from 'react-apollo'

const IndexPage = () => (
    <Layout title='Home | Next.js + TypeScript Example'>
        <h1>Hello Next.js! 👋</h1>
        <p>
            <Link href='/about'>
                <a>About</a>
            </Link>
        </p>
        <Mutation>

        {() => <button>Call the Mutation</button>}
        </Mutation>
    </Layout>
)

export default IndexPage
