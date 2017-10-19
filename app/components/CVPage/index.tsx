import * as React from 'react'
import { Link } from 'react-router'

import { Section, SubSection } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
import { HistoryViewer } from '../Common/historyViewer'

interface CVPageProps {
  params?: any & {
    key?: String
  }
}

interface CVPageState {
  students: any[],
  error?: string,
  public?: boolean,
  key?: string,
  categories?: {
    groups?: string[],
    years?: string[],
    studyCodes?: string[],
  },
}

export class CVPage extends React.Component<CVPageProps, CVPageState> {
  constructor (props: any) {
    super(props)

    this.state = {
      students: [],
      key: props.params.key || null,
      categories: {
        groups: [],
        years: [],
        studyCodes: [],
      },
    }

    this.fetchStudents()
  }

  componentWillReceiveProps (nextProps: CVPageProps) {
    this.fetchStudents(nextProps)
  }

  private fetchStudents (props: CVPageProps = this.props): void {
    fetch('/api/v1/cv/' + (props.params.key || '')).then((r: any) => r.json()).then((data: any) => {
      let groups: string[] = []
      let years: string[] = []
      let studyCodes: string[] = []

      for (let student of data.students) {
        if (groups.indexOf(student.group) === -1) groups.push(student.group)
        if (years.indexOf(student.year) === -1) years.push(student.year)
        if (studyCodes.indexOf(student.study) === -1) studyCodes.push(student.study)
      }

      this.setState(Object.assign({}, this.state, {
        students: data.students,
        error: data.error || null,
        public: !props.params.key || !!data.error,
        categories: {
          groups: groups,
          years: years,
          studyCodes: studyCodes,
        },
      }))
    })
  }

  private updateKeyHandler (evt: any) {
    this.setState(Object.assign({}, this.state, {
      key: evt.target.value,
      error: '',
    }))
  }

  render () {
    let students: any = null
    let error: any = null

    if (this.state.error) {
      error = <div style={{color: 'red', fontStyle: 'italic'}}>{this.state.error}</div>
    }

    if (this.state.students) {
      students = this.state.students.map((e: any, i: number) => (
        <div key={i} className="row">
          <span data-colname="Name" className="col col-name">
            <span>{`${e.first_name} ${e.middle_name ? (e.middle_name + ' ') : ''}${e.last_name}`}</span>
          </span>
          <span data-colname="Study" className="col col-study">
            <span>{e.year}. {e.study.toUpperCase()}</span>
          </span>
          <span data-colname="Group" className="col col-group">
            <span>{e.group}</span>
          </span>
          <span data-colname="Description" className="col col-desc">
            <span dangerouslySetInnerHTML={{__html: e.description.replace(/\\r\\n|\\n/g, '<br />')}}></span>
          </span>
          <span data-colname="CV" className="col col-cv">
            <span><a href={'/api/v1/cv/' + this.props.params.key + '/' + e.cv}>{e.cv.split('.').pop().toUpperCase()}-file</a></span>
          </span>
        </div>
      ))
    }

    return (
      <div className="page page-cv">
        <Section titleText="CV database">
          {this.state.public && <div>
            <input defaultValue={this.props.params.key} onInput={this.updateKeyHandler.bind(this)} placeholder="Key for private profiles" />
            {this.state.key && <Link to={'/cv/' + this.state.key} className="button active">Access private profiles</Link>}
          </div>}
          {this.state.key && error}
          <div className="cv-students table">
            <div className="h-row">
              <span className="h-col col-name">Name</span>
              <span className="h-col col-study">Study</span>
              <span className="h-col col-study">Group</span>
              <span className="h-col col-desc">Description</span>
              <span className="h-col col-cv">CV</span>
            </div>
            {students}
          </div>
        </Section>
      </div>
    )
  }
}

export default CVPage
