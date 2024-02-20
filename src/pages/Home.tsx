import React from 'react'
import Hero from '../components/Hero';
import Refer from '../components/Refer';
import Promo from '../components/Promo';
import Customer from '../components/Customer';
import Works from '../components/Works';
import Footer from '../components/Footer'
type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <div className='overflow-hidden'>
                <Hero/>
                <Refer/>
                <Promo/>
                <Customer/>
                <Works/>
                <Footer/>
            </div>
        </>
    )
}

export default Home;