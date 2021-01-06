import App, { Container } from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import withApollo from '../lib/withApollo'

class MyApp extends App<any> {
    render() {
        const { Component, pageProps, apolloClient } = this.props

        console.log('This is the page props',pageProps)
        return (
            <Container>
                <ApolloProvider client={apolloClient}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </Container>
        )
    }
}

export default withApollo(MyApp)
