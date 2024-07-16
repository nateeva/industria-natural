import NavBar from '@/Components/NavBar'
import React from 'react'

const LandingLayout = ({ auth, children }) => {
    return (
        <>
            <header>
                <NavBar auth={auth} />
            </header>

            <main>
                {children}
            </main>

            <footer>
                
            </footer>

        </>
    )
}

export default LandingLayout
