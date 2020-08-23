import React, { Component } from 'react'
import {connect} from 'react-redux'
import Page from './page'
import {withRouter} from 'react-router-dom'
import findSuggestions from '../../redux/actions/findSuggestions'
import findResults from '../../redux/actions/findResults'

class AppBar extends Component {
    constructor(props) { 
        super(props)
        
        this.state = {
            text: ''
        }
    }

    onChangeText = (newText) => {
        this.setState({ text: newText })
        this.props.findSuggestions(newText);
    }

    onChangeSelection = (newText) => {
        this.setState({ text: newText })
        this.props.findResults(newText);
        this.props.history.push('/results')
    }

    render() {
        const { text } = this.state
        return (
            <Page
                text={text}
                suggestions={this.props.suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions
    } 
}

const mapDispatchToProps = {
    findSuggestions,
    findResults,
}

export default withRouter(
    connect(mapStateToProps,mapDispatchToProps)(AppBar)
)