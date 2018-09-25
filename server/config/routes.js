var Users = require('./../controllers/users.js')
var Events = require('./../controllers/events.js')
module.exports = function(app){
    app.get('/users', Users.getAll)
    app.post('/users', Users.addUser)
    app.get('/users/:id', Users.getOne)
    app.put('/users/:id', Users.updateUser)
    app.delete("/users/:id", Users.deleteUser)
    // Routes for events
    app.get('/events', Events.getEvents)
    app.post('/events', Events.addEvent)
    app.get('/events/:id', Events.getOneEvent)
    app.put('/events/:id', Events.updateEvent)
    app.delete('/events/:id', Events.deleteEvent)
    app.post('/events/:id', Events.addAttendee)
}