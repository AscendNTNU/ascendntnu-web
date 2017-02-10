import * as React from 'react'
import { polyfill } from 'es6-promise';
polyfill();

export interface HistoryViewerProps {
  year?: number,
}

export interface HistoryViewerState {
  year?: number,
  history: any[],
  historyElements: any[],
  pos: number,
  down: boolean,
  startPos: number,
  width: number,
  selectedEvent: any,
  eventViewHeight: any,
}

export class HistoryViewer extends React.Component<HistoryViewerProps, HistoryViewerState> {
  public mnd: string[]
  public timelineScale: number
  private observer: any
  private historyTimeline: any[]
  private historyElements: any[]

  constructor (props: any) {
    super(props)

    this.timelineScale = 2 / 50000000
    this.mnd = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'des']

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

    if (props.year)
      this.state.year = props.year

    this.getHistory(this.state.year || null)

    this.resizeHandler = this.resizeHandler.bind(this)
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
    this.mouseUpHandler = this.mouseUpHandler.bind(this)

    this.historyTimeline = []
    let fromDate: Date = new Date(2014, 10)
    let toDate: Date = new Date()
    let d: Date = fromDate
    let i: number = 0
    let p: number

    while (toDate.getTime() + 5*30*24*60*60*1000 > d.getTime()) {
      d = new Date(
        fromDate.getFullYear() + Math.floor((i + fromDate.getMonth()) / 12),
        (fromDate.getMonth() + i) % 12
      )
      p = - Math.floor((d.getTime() - Date.now() + 30*24*3600*1000) * this.timelineScale)
      let style: any = {
        right: `${p}px`,
        width: `${32*24*3600*1000*this.timelineScale}px`
      }
      let title: any = null
      if (d.getMonth() === 0) title = <span className="event-timeline-year">{d.getFullYear()} </span>
      this.historyTimeline.push(
        <div key={i} className="event-timeline" style={style}>
          {title}
          {this.mnd[d.getMonth()]}
        </div>
      )
      i++
    }
  }

  componentWillReceiveProps (nextProps: any) {
  }

  componentDidMount () {
    window.addEventListener('resize', this.resizeHandler)
    window.addEventListener('mousemove', this.mouseMoveHandler)
    window.addEventListener('mouseup', this.mouseUpHandler)
    window.addEventListener('touchmove', this.mouseMoveHandler)
    window.addEventListener('touchend', this.mouseUpHandler)
    window.addEventListener('touchcancel', this.mouseUpHandler)

    this.setState(Object.assign({}, this.state, {
      width: document.querySelector('.history-viewer').clientWidth,
      eventViewHeight: 0
    }))

    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        setTimeout(() => {
          this.setState(Object.assign({}, this.state, {
            eventViewHeight: document.querySelector('.history-event-view-container').clientHeight
          }))
        }, 50)
      })
    })

    let target: any = document.querySelector('.history-event-view')
    this.observer.observe(target, {
      childList: true,
      characterData: true,
      subtree: true,
    })
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeHandler)
    window.removeEventListener('mousemove', this.mouseMoveHandler)
    window.removeEventListener('mouseup', this.mouseUpHandler)
    window.removeEventListener('touchmove', this.mouseMoveHandler)
    window.removeEventListener('touchend', this.mouseUpHandler)
    window.removeEventListener('touchcancel', this.mouseUpHandler)
    this.observer.disconnect()
    this.historyElements = []
  }

  resizeHandler (evt: any) {
    this.setState(Object.assign({}, this.state, {
      width: document.querySelector('.history-viewer').clientWidth
    }))
  }

  mouseMoveHandler (evt: any) {
    if (this.state.down) {
      let pos = 0

      if (evt.type === 'mousemove') {
        pos = evt.clientX
      } else {
        //evt.preventDefault()
        pos = evt.touches[0].clientX
      }

      this.setState(Object.assign({}, this.state, {
        pos: Math.max(
          Math.max(-400, -this.state.width / 2),
          Math.min(2*1400 - this.state.width, pos - this.state.startPos)
        )
      }))
    }
  }

  mouseDownHandler (evt: any) {
    let pos = 0

    if (evt.type === 'mousedown') {
      pos = evt.clientX - this.state.pos
    } else {
      //evt.preventDefault()
      pos = evt.touches[0].clientX - this.state.pos
    }

    this.setState(Object.assign({}, this.state, {
      down: true,
      startPos: pos
    }))
  }

  mouseUpHandler (evt: any) {
    if (this.state.down) {
      this.setState(Object.assign({}, this.state, {
        down: false
      }))
    }
  }

  scrollHandler (evt: any) {
    if (evt.deltaX !== 0) evt.preventDefault()
    this.setState(Object.assign({}, this.state, {
      pos: Math.max(Math.max(-400, -this.state.width / 2), Math.min(2*1400 - this.state.width, this.state.pos - evt.deltaX))
    }))
  }

  dateParser (date: string): any {
    let dateParsed: string[] = date.split(/[TZ\-:]/)
    let d: number[] = []
    for (let i in dateParsed) d.push(parseInt(dateParsed[i]))
    let time: Date = new Date(d[0], d[1] - 1, d[2], d[3], d[4], d[5])
    let dateFormatted = `${d[2]}. ${this.mnd[d[1] - 1]}. ${d[0]}`
    return { dateFormatted, dateParsed, time }
  }

  selectEventHandler (evt: any, event?: any) {
    let selectedEvent: any = event || this.state.history[2016][0]
    this.setState(Object.assign({}, this.state, {
      selectedEvent: selectedEvent === this.state.selectedEvent
        ? null
        : selectedEvent
    }))
  }

  public getHistory (year?: number) {
    fetch('/api/v1/history/' + (year || '')).then(r => r.json()).then(r => {

      let history: any[] = []
      for (let year in r) {
        for (let event in r[year]) {
          const { dateFormatted, time } = this.dateParser(r[year][event].date)
          r[year][event].dateFormatted = dateFormatted
          r[year][event].time = time
          r[year][event].pos = - (time.getTime() - Date.now()) * this.timelineScale
          history.push(r[year][event])
        }
      }

      this.historyElements = history.map((event: any, i: number) => {
        let style: any = {
          right: event.pos,
          top: `${20 + 42 * Math.cos(event.time.getTime * this.timelineScale)}px`
        }
        return (
          <div key={i}
            className={`event ${event.categories}`}
            onClick={(evt: any) => this.selectEventHandler(evt, event)}
            style={style}>
            <div className="event-title">
              {event.title}
            </div>
            <div className="event-date">
              {event.dateFormatted}
            </div>
          </div>
        )
      })

      this.setState(Object.assign({}, this.state, {
        history: r,
        historyElements: this.historyElements
      }))
    })
  }

  render() {
    let historyContentStyles: any = {
      left: Math.max(
        Math.max(-400, -this.state.width / 2),
        Math.min(2*1400 - this.state.width, this.state.pos)
      ) + 'px'
    }

    let eventViewStyles: any = {
      minHeight: this.state.selectedEvent
        ? this.state.eventViewHeight + 'px'
        : 0
    }

    return (
      <div className="history-viewer">
        <div className="history-content-view"
          onMouseDown={this.mouseDownHandler.bind(this)}
          onTouchStart={this.mouseDownHandler.bind(this)}
          onWheel={this.scrollHandler.bind(this)}
          draggable={false}>
          <div className="history-content" style={historyContentStyles}>
            {this.historyTimeline}
            {this.state.historyElements}
          </div>
        </div>
        <div className={`history-event-view ${this.state.selectedEvent ? 'open' : ''}`} style={eventViewStyles}>
          <div className="page-container history-event-view-container">
            <div className="history-event-view-block">
              <h1 className="history-event-view-title">
                {this.state.selectedEvent && this.state.selectedEvent.title}
              </h1>
              <p className="history-event-view-content" dangerouslySetInnerHTML={{
                  __html: this.state.selectedEvent && this.state.selectedEvent.content
              }} />
            </div>
            {
              this.state.selectedEvent && this.state.selectedEvent.image && (
                <div>
                  <img src={this.state.selectedEvent.image} />
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default HistoryViewer
