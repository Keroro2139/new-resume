import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './Header.css'

import { setHeaderScroll } from '../../actions'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prvPath: 'information',
            headerPostion: null,
            setHeaderPosition: false,
            isSetProps: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        document.querySelector(`#${this.state.prvPath}`).classList.add('active')
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll = event => {
        const { setHeaderPosition, headerPostion, isSetProps } = this.state

        var header = document.querySelector('#header-container')
        var sticky = header.offsetTop

        if (!setHeaderPosition) {
            this.setState({
                headerPostion: sticky,
                setHeaderPosition: true
            })
        }

        if (window.scrollY >= headerPostion && headerPostion !== null) {
            if (!isSetProps) {
                this.props.setHeaderScroll('isSet')
                this.setState({ isSetProps: true })
            }
            header.classList.add('sticky')
        }
        else {
            if (isSetProps) {
                this.props.setHeaderScroll('isNotSet')
                this.setState({ isSetProps: false })
            }
            header.classList.remove('sticky')
        }

    }

    handleSelectMenu = path => () => {

        document.querySelector(`#${this.state.prvPath}`).classList.remove('active')
        this.setState({ prvPath: path })
        this.props.history.push(`/${path}`)
        document.querySelector(`#${path}`).classList.add('active')
        
    }

    render() {
        return (
            <div>
                <div id='header-container'>
                    <div id="logo" onClick={() => window.scrollTo(0, 0)}>
                        <h2><font color='#1970C6'>W</font>EERAPAT</h2>
                    </div>
                    <div id="menu">
                        <ul>
                            <li id='information'>
                                <p onClick={this.handleSelectMenu('information')}>Information</p>
                            </li>
                            <li id='skill'>
                                <p onClick={this.handleSelectMenu('skill')}>Skill</p>
                            </li>
                            <li id='experience'>
                                <p onClick={this.handleSelectMenu('experience')}>Experience</p>
                            </li>
                            <li id='education'>
                                <p onClick={this.handleSelectMenu('education')}>Education</p>
                            </li>
                            <li id='project'>
                                <p onClick={this.handleSelectMenu('project')}>Project</p>
                            </li>
                            <li id='about'>
                                <p onClick={this.handleSelectMenu('about')}>About</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(null, { setHeaderScroll })(Header))