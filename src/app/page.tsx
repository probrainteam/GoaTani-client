'use client'
import Button from '@/components/button'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main>
            <Button>button</Button>
            <Button isDisabled>button</Button>
            <Button variant="outline">button</Button>
        </main>
    )
}
