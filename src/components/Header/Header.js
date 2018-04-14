import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    handleSelectMenu = path => () => {
        this.props.history.push(`/${path}`)
    }

    render() {
        return (
            <div>
                <div id='header-container'>
                    <div id="logo">
                        <h2 onClick={this.handleSelectMenu('')}> <font color='#1970C6'>W</font>EERAPAT</h2>
                    </div>
                    <div id="menu">
                        <ul>
                            <li>
                                <p onClick={this.handleSelectMenu('information')}>Information</p>
                            </li>
                            <li>
                                <p onClick={this.handleSelectMenu('skill')}>Skill</p>
                            </li>
                            <li>
                                <p onClick={this.handleSelectMenu('experience')}>Experience</p>
                            </li>
                            <li>
                                <p onClick={this.handleSelectMenu('education')}>Education</p>
                            </li>
                            <li>
                                <p onClick={this.handleSelectMenu('project')}>Project</p>
                            </li>
                            <li>
                                <p onClick={this.handleSelectMenu('about')}>About</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)