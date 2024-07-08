import React from 'react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import WidthLayout from '../components/WidthLayout'
import { DarkModeToggle } from '@/components/darkmode-button'

const TopNav = () => {
    return (
        <WidthLayout>
            <nav className='w-full py-4 flex justify-between border-b'>
                <div className='text-2xl font-semibold'>Meetings</div>
                <div>
                    <div className='flex space-x-5'>
                        <DarkModeToggle />
                    <SignedOut>
                        <SignInButton />
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