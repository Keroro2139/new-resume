import React, { Component } from 'react'
import './Banner.css'

// transform: rotate(360deg);

class Banner extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bannerRadius: 0,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll = event => {
        const { bannerRadius } = this.state
        var bannerImg = document.querySelector('img').style.transform = `rotate(${bannerRadius}deg)`
        this.setState({ bannerRadius: bannerRadius + 360 })        
    }

    render() {
        return (
            <div>
                <div id="banner-container">
                    <div id="center-container">
                        <img src="https://s3-ap-southeast-1.amazonaws.com/weerapat-webstaticreact-test/images/my-logo.png" alt="banner-logo" />
                        <h1>weerapat site</h1>
                        <p>Weerapat Chulaket</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner