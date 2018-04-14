import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Info.css'

class Info extends Component {

    render() {
        const { isSetSticky } = this.props
        return (
            <div>
                <div style={{ marginTop: isSetSticky === 'isSet' ? 80 : null }}></div>
                <div id="info-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <img src="https://s3-ap-southeast-1.amazonaws.com/weerapat-webstaticreact-test/images/profile-image.JPG" alt="" />
                            </div>
                            <div className="col-md-8 col-sm-8">
                                <h1 id='information'>Information</h1>
                                <p>I'm studying Computer Science at Burapha University.
                                    I want to be a well Developer. I often to develop myself
                                    for keep up with new technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isSetSticky: state.stickyHeader
    }
}

export default connect(mapStateToProps)(Info)