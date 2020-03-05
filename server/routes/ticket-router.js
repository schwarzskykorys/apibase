const express = require('express')

const TicketController = require('../controllers/ticket-ctrl')

const router = express.Router()

router.post('/ticket', TicketController.createTicket)
router.put('/ticket/:id', TicketController.updateTicket)
router.delete('/ticket/:id', TicketController.deleteTicket)
router.get('/ticket/:id/:key', TicketController.getTicketById)
router.get('/tickets/:key', TicketController.getTickets)

module.exports = router