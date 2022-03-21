import React from 'react';
import Footer from './Footer';

// components
import Navbar from './Navbar';


export const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <main>
                {children}
            </main>

            <footer>
                <Footer />
            </footer>

        </div>
    );
};
