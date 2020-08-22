import React, { Component } from 'react'
import {connect} from 'react-redux'
import Page from './page'

class Results extends Component {
    render() {
        const { suggestions } = this.props
        console.log(suggestions)

        return (
            <Page />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions
    } 
}

export default connect(mapStateToProps)(Results)