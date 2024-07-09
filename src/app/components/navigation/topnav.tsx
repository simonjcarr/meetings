'use client'
import React from 'react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import WidthLayout from '../WidthLayout'
import { DarkModeToggle } from '@/components/darkmode-button'
import { Button } from '@/components/ui/button'
import { TopNavMenu } from '@/app/components/navigation/topNavMenu/TopNavMenu'
import { useRouter } from "next/navigation"

const TopNav = () => {
    const router = useRouter()
    return (
        <WidthLayout>
            <nav className='w-full py-4 flex justify-between border-b'>
                <div className='text-2xl font-semibold cursor-pointer' onClick={() => {router.push('/')}}>Meetings</div>
                <div>
                    <SignedIn>
                        <TopNavMenu />
                    </SignedIn>
                </div>
                <div>
                    <div className='flex space-x-5'>
                        <DarkModeToggle />
                        <SignedOut>
                            <SignInButton>
                                <Button>Sign in</Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </nav>
        </WidthLayout>
    )
}
export default TopNav