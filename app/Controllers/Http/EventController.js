'use strict'

class EventController {
  index({ view }) {
    return view.render('event.index')
  }
  create({ view }) {
    return view.render('event.create')
  }
}

module.exports = EventController