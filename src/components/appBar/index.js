import React, { Component } from 'react'
import {connect} from 'react-redux'
import Page from './page'

import findSuggestions from '../../redux/actions/findSuggestions'

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
    onChangeSelection = () => {

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
}

export default connect(mapStateToProps,mapDispatchToProps)(AppBar)