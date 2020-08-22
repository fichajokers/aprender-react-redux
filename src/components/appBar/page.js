import React from 'react'
import {AppBar,Toolbar,Typography} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AutoComplete from '../autoComplete/'
import './styles.css'

export default function Page(props) {
    
    const {
        text,
        suggestions,
        onChangeText,
        onChangeSelection
    } = props

    return (
        <AppBar position="static">
            <Toolbar className="appbar">
                <Typography variant="h6" color="inherit">
                    react-redux
                </Typography>

                <AutoComplete
                    text={text}
                    suggestions={suggestions}
                    onChangeText={onChangeText}
                    onChangeSelection={onChangeSelection}
                />

                <AccountCircle />
            </Toolbar>
        </AppBar>
    )
}
