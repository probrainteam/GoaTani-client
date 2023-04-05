import './globals.css'
import { ReactNode } from 'react'
import RootStyleRegistry from '@/lib/RootStyleRegistry'

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ko">
            <body>
                <RootStyleRegistry>{children}</RootStyleRegistry>
            </body>
        </html>
    )
}
