import React, { Component } from 'react'
import api from '../api'

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

class ShowTicket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickets: [],
            columns: [],
            isLoading: false,
        }
    }

    queryy = useQuery();

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getTicketById(queryy.get('id')).then(ticket => {
            this.setState({
                tickets: ticket,
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
                {queryy(name)}
            </div>
        )
    }
}

export default ShowTicket
