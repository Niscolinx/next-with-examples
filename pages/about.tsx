import Link from 'next/link'
import Layout from '../components/Layout'
import { Mutation } from 'react-apollo'


const AboutPage = () => (
    <Layout title='About | Next.js + TypeScript Example'>
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
            <Link href='/'>
                <a>Go home</a>
            </Link>
        </p>
        <Mutation>{() => <button>Call the Mutation</button>}</Mutation>
    </Layout>
)

export default AboutPage
