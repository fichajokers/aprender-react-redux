import React, { Component } from 'react'
import {connect} from 'react-redux'
import Page from './page'
import {withRouter} from 'react-router-dom'
import './styles.css'

class Results extends Component {

    goTo = (ruta) => {
        this.props.history.push(ruta)
    }

    render() {
        const { results } = this.props

        return (
            <Page 
                results={results} 
                goTo={this.goTo}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    } 
}

export default withRouter(
    connect(mapStateToProps)(Results)
)
