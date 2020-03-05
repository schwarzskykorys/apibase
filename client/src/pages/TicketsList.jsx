import React, { Component } from 'react'
import api from '../api'

class TicketsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickets: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllTickets().then(tickets => {
            this.setState({
                tickets: tickets.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { tickets, isLoading } = this.state
        console.log('TCL: TicketsList -> render -> tickets', tickets)

        let showTable = true
        if (!tickets.length) {
            showTable = false
        }

        return (
            <div>
                {showTable && (
                    this.state.tickets.map(ticket => (
                        ticket._id + "<br/>"
                    ))
                )}
            </div>
        )
    }
}

export default TicketsList
