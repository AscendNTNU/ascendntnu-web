import React, { Component } from 'react'
import { polyfill } from 'es6-promise'
import { BlogArticle } from '../BlogPage/blogArticle'
import { API_URL } from '../../constants'

polyfill()

export class HistoryViewer extends Component {
  constructor(props) {
    super(props)

    this.timelineScale = 2 / 50000000
    this.mnd = [
      'jan',
      'feb',
      'mar',
      'apr',
      'may',
      'jun',
      'jul',
      'aug',
      'sep',
      'oct',
      'nov',
      'des',
    ]

    this.state = {
      history: [],
      historyElements: [],
      pos: -300,
      down: false,
      startPos: 0,
      width: 0,
      selectedEvent: null,
      eventViewHeight: null,
    }

    if (props.year) this.state.year = props.year

    this.getHistory(this.state.year || null)

    this.resizeHandler = this.resizeHandler.bind(this)
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
    this.mouseUpHandler = this.mouseUpHandler.bind(this)
    this.loadedNewContent = this.loadedNewContent.bind(this)

    this.historyTimeline = []
    let fromDate = new Date(2014, 10)
    let toDate = new Date()
    let d = fromDate
    let i = 0
    let p = 0

    while (toDate.getTime() + 5 * 30 * 24 * 60 * 60 * 1000 > d.getTime()) {
      d = new Date(
        fromDate.getFullYear() + Math.floor((i + fromDate.getMonth()) / 12),
        (fromDate.getMonth() + i) % 12
      )
      p = -Math.floor(
        (d.getTime() - Date.now() + 30 * 24 * 3600 * 1000) * this.timelineScale
      )
      let style = {
        right: `${p}px`,
        width: `${32 * 24 * 3600 * 1000 * this.timelineScale}px`,
      }
      let title = null
      if (d.getMonth() === 0)
        title = <span className="event-timeline-year">{d.getFullYear()} </span>
      this.historyTimeline.push(
        <div key={i} className="event-timeline" style={style}>
          {title}
          {this.mnd[d.getMonth()]}
        </div>
      )
      i++
    }
  }

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler)
    window.addEventListener('mousemove', this.mouseMoveHandler)
    window.addEventListener('mouseup', this.mouseUpHandler)
    window.addEventListener('touchmove', this.mouseMoveHandler)
    window.addEventListener('touchend', this.mouseUpHandler)
    window.addEventListener('touchcancel', this.mouseUpHandler)

    this.setState(
      Object.assign({}, this.state, {
        width: document.querySelector('.history-viewer').clientWidth,
        eventViewHeight: 0,
      })
    )

    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        switch (mutation.type) {
          case 'childList':
            let target = mutation.target
            Array.prototype.forEach.call(target.children, e => {
              e.querySelectorAll('img').forEach(img => {
                img.addEventListener('load', this.loadedNewContent, false)
              })
            })
            break
          default:
            break
        }

        this.setState(
          Object.assign({}, this.state, {
            eventViewHeight: document.querySelector(
              '.history-event-view-container'
            ).clientHeight,
          })
        )
      })
    })

    let target = document.querySelector('.history-event-view')
    this.observer.observe(target, {
      childList: true,
      characterData: true,
      subtree: true,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler)
    window.removeEventListener('mousemove', this.mouseMoveHandler)
    window.removeEventListener('mouseup', this.mouseUpHandler)
    window.removeEventListener('touchmove', this.mouseMoveHandler)
    window.removeEventListener('touchend', this.mouseUpHandler)
    window.removeEventListener('touchcancel', this.mouseUpHandler)
    this.observer.disconnect()
    this.historyElements = []
  }

  loadedNewContent(evt) {
    evt.target.removeEventListener('load', this.loadedNewContent, false)

    this.setState(
      Object.assign({}, this.state, {
        eventViewHeight: document.querySelector('.history-event-view-container')
          .clientHeight,
      })
    )
  }

  resizeHandler(evt) {
    this.setState(
      Object.assign({}, this.state, {
        width: document.querySelector('.history-viewer').clientWidth,
        eventViewHeight: document.querySelector('.history-event-view-container')
          .clientHeight,
      })
    )
  }

  mouseMoveHandler(evt) {
    if (this.state.down) {
      let pos = 0

      if (evt.type === 'mousemove') {
        pos = evt.clientX
      } else {
        //evt.preventDefault()
        pos = evt.touches[0].clientX
      }

      this.setState(
        Object.assign({}, this.state, {
          pos: Math.max(
            Math.max(-400, -this.state.width / 2),
            Math.min(2 * 1400 - this.state.width, pos - this.state.startPos)
          ),
        })
      )
    }
  }

  mouseDownHandler(evt) {
    let pos = 0

    if (evt.type === 'mousedown') {
      pos = evt.clientX - this.state.pos
    } else {
      //evt.preventDefault()
      pos = evt.touches[0].clientX - this.state.pos
    }

    this.setState(
      Object.assign({}, this.state, {
        down: true,
        startPos: pos,
      })
    )
  }

  mouseUpHandler(evt) {
    if (this.state.down) {
      this.setState(
        Object.assign({}, this.state, {
          down: false,
        })
      )
    }
  }

  scrollHandler(evt) {
    if (evt.deltaX !== 0) evt.preventDefault()

    let pos = Math.max(
      Math.max(-400, -this.state.width / 2),
      Math.min(2 * 1400 - this.state.width, this.state.pos - evt.deltaX)
    )

    if (pos !== this.state.pos) {
      this.setState(
        Object.assign({}, this.state, {
          pos: pos,
        })
      )
    }
  }

  dateParser(date) {
    let dateParsed = date.split(/[TZ\-:]/)
    let d = []
    for (let i in dateParsed) d.push(parseInt(dateParsed[i], 10))
    let time = new Date(d[0], d[1] - 1, d[2], d[3], d[4], d[5])
    let dateFormatted = `${d[2]}. ${this.mnd[d[1] - 1]}. ${d[0]}`
    return { dateFormatted, dateParsed, time }
  }

  selectEventHandler(evt, event) {
    let selectedEvent = event || this.state.history[2016][0]
    this.setState(
      Object.assign({}, this.state, {
        selectedEvent:
          selectedEvent === this.state.selectedEvent ? null : selectedEvent,
      })
    )

    let events = document.querySelectorAll('.history-content > .event')
    events.forEach(e => {
      e.classList.remove('selected')
    })

    let target = evt.target.classList.contains('event')
      ? evt.target
      : evt.target.parentElement

    if (selectedEvent === this.state.selectedEvent)
      target.classList.remove('selected')
    else {
      target.classList.add('selected')

      let historyViewer = document.querySelector('.history-viewer')
      let app = document.querySelector('#app')

      let startScroll = app.scrollTop
      let scrollTo = historyViewer.offsetTop - 64

      if (startScroll < scrollTo) {
        let interval = setInterval(() => {
          app.scrollTop +=
            10 /
            (0.1 +
              Math.pow(
                (app.scrollTop - scrollTo) / (startScroll - scrollTo) - 0.5,
                2
              ))
          if (app.scrollTop - scrollTo >= 0) {
            app.scrollTop = scrollTo
            clearInterval(interval)
          }
        }, 10)
      }
    }
  }

  getHistory(year) {
    let setup = process.env.NODE_ENV === 'production' ? {} : { mode: 'cors' }

    fetch(`${API_URL}/history/${year || ''}`, setup)
      .then(r => r.json())
      .then(r => {
        let history = []
        for (let year in r) {
          for (let event in r[year]) {
            const { dateFormatted, time } = this.dateParser(r[year][event].date)
            r[year][event].dateFormatted = dateFormatted
            r[year][event].time = time
            r[year][event].pos =
              -(time.getTime() - Date.now()) * this.timelineScale
            history.push(r[year][event])
          }
        }

        this.historyElements = history.map((event, i) => {
          let style = {
            right: event.pos,
            top: `${30 +
              42 * Math.cos(event.time.getTime() * this.timelineScale / 5)}px`,
          }
          return (
            <div
              key={i}
              className={`event ${event.categories}`}
              onClick={evt => this.selectEventHandler(evt, event)}
              style={style}
            >
              <div className="event-title">{event.title}</div>
              <div className="event-date">{event.dateFormatted}</div>
            </div>
          )
        })

        this.setState(
          Object.assign({}, this.state, {
            history: r,
            historyElements: this.historyElements,
          })
        )
      })
  }

  render() {
    let historyContentStyles = {
      left:
        Math.max(
          Math.max(-400, -this.state.width / 2),
          Math.min(2 * 1400 - this.state.width, this.state.pos)
        ) + 'px',
    }

    let eventViewStyles = {
      minHeight: this.state.selectedEvent
        ? this.state.eventViewHeight + 'px'
        : 0,
    }

    return (
      <div className="history-viewer dark-theme">
        <div
          className="history-content-view"
          onMouseDown={this.mouseDownHandler.bind(this)}
          onTouchStart={this.mouseDownHandler.bind(this)}
          onWheel={this.scrollHandler.bind(this)}
          draggable={false}
        >
          <div className="history-content" style={historyContentStyles}>
            {this.historyTimeline}
            {this.state.historyElements}
          </div>
        </div>
        <div
          className={`history-event-view ${
            this.state.selectedEvent ? 'open' : ''
          }`}
          style={eventViewStyles}
        >
          <div className="page-container history-event-view-container">
            <div className="history-event-view-block">
              <h1 className="history-event-view-title">
                {this.state.selectedEvent && this.state.selectedEvent.title}
              </h1>
              <p
                className="history-event-view-content"
                dangerouslySetInnerHTML={{
                  __html:
                    this.state.selectedEvent &&
                    this.state.selectedEvent.content,
                }}
              />
            </div>
            {this.state.selectedEvent &&
              this.state.selectedEvent.image && (
                <div className="history-event-view-image">
                  <img src={this.state.selectedEvent.image} alt="History" />
                </div>
              )}
            {this.state.selectedEvent &&
              this.state.selectedEvent.post && (
                <div className="history-event-view-post">
                  <BlogArticle post={this.state.selectedEvent.post} />
                </div>
              )}
          </div>
        </div>
      </div>
    )
  }
}

export default HistoryViewer
