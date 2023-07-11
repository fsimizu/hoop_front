import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SocialMedia } from '../components/SocialMedia';

export const Layout = ({children}) =>{
    return(
        <div>
            <Navbar />
            <SocialMedia />
            {children}
            <Footer />
        </div>
    )
}