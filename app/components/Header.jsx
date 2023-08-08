'use client'

import { useRouter } from 'next/navigation';
import Link from "next/link";

export function Header() {

    const router = useRouter();

    return (
        <>
            <header>
                <Link href="/">Index</Link>
                <Link href="/about">About</Link>
                <Link href="/count">Count</Link>
            </header>

            <button onClick={() => router.push('/about')}>
                Go About Page
            </button>
            
        </>
    )
}