var Users = require('./../controllers/users.js')
var Events = require('./../controllers/events.js')
var Shares = require('./../controllers/shares.js')
module.exports = function(app){
    app.get('/users', Users.getUsers)
    app.post('/users', Users.addUser)
    app.get('/users/:id', Users.getOneUser)
    app.put('/users/:id', Users.updateUser)
    app.delete('/users/:id', Users.deleteUser)
    app.post('/users/login', Users.login)
    // Routes for events
    app.get('/events', Events.getEvents)
    app.post('/events', Events.addEvent)
    app.get('/events/:id', Events.getOneEvent)
    app.put('/events/:id', Events.updateEvent)
    app.delete('/events/:id', Events.deleteEvent)
    app.post('/events/:id', Events.addAttendee)
    // Routes for shares
    app.get('/shares', Shares.getShares)
    app.post('/shares', Shares.addShare)
    app.get('/shares/:id', Shares.getOneShare)
    app.put('/shares/:id', Shares.updateShare)
    app.delete('/shares/:id', Shares.deleteShare)
}