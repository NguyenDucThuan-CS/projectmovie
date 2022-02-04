import React, { Component } from 'react'
import Carousel from './Carousel'
import Header from './Header'
import HotMovie from './HotMovie'
import ShowingMovie from './ShowingMovie'
import TheaterCluster from './TheaterCluster'
import Register from './Register'
import Contact from './Contact'
import Footer from './Footer'
export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <HotMovie />
                <ShowingMovie />
                <TheaterCluster />
                <Register />
                <Contact />
                <Footer />
            </div>
        )
    }
}
