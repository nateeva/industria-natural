import Footer from '@/Components/Landing/Footer'
import NavBar from '@/Components/Landing/NavBar'
import React from 'react'

const LandingLayout = ({ auth, children }) => {
    return (
        <>
            <header>
                <NavBar auth={auth} />
            </header>

            <main className='pt-[68px]'>
                {children}
            </main>

            <footer>
                <Footer />
            </footer>

        </>
    )
}

export default LandingLayout
