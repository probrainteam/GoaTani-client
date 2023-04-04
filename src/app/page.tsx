'use client'
import styled, { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <InnerWrapper>
                    <Header />
                    <main>main</main>
                </InnerWrapper>
                <Footer />
            </Wrapper>
        </ThemeProvider>
    )
}

const Wrapper = styled.div`
    max-width: 475px;
    background-color: #000;
    margin: auto;
`

const InnerWrapper = styled.div`
    min-height: 100vh;
`
