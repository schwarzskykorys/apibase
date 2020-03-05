import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { TicketsList, TicketsInsert, TicketsUpdate } from '../pages/index'

import 'bootstrap/dist/css/bootstrap.min.css'

// TODO: APPP WILL

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/tickets/list" exact component={TicketsList} />
                <Route path="/tickets/create" exact component={TicketsInsert} />
                <Route
                    path="/tickets/update/:id"
                    exact
                    component={TicketsUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App