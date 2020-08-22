import React, {Fragment} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '../appBar'

export default function Page() {
    return (
        <Fragment>
            { /** reinicia los estilos que causan conflitcos en las paginas */ }
            <CssBaseline />
            <AppBar />
        </Fragment>
    )
}
