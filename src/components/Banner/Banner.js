import React, { Component } from 'react'
import './Banner.css'

class Banner extends Component {
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