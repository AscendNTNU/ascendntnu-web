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

    if (this.props.params && this.props.params.key) {
      this.fetchStudents()
    } else {
      this.state.error = 'Missing key'
    }
  }

  componentWillReceiveProps (nextProps: CVPageProps) {
    this.fetchStudents(nextProps)
  }

  private fetchStudents (props: CVPageProps = this.props): void {
    fetch('/api/v1/cv/' + props.params.key).then((r: any) => r.json()).then((data: any) => {
      if (data.error) {
        this.setState(Object.assign({}, this.state, {
          students: [],
          error: data.error,
          categories: {
            groups: [],
            years: [],
            studyCodes: [],
          },
        }))
      } else {
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
          error: null,
          categories: {
            groups: groups,
            years: years,
            studyCodes: studyCodes,
          },
        }))
      }
    })
  }

  private updateKeyHandler (evt: any) {
    this.setState(Object.assign({}, this.state, {
      key: evt.target.value
    }))
  }

  render () {
    let students: any = null
    let error: any = null

    if (this.state && this.state.error) {
      error = <div style={{color: 'red', fontStyle: 'italic'}}>{this.state.error}</div>
    } else if (this.state && this.state.students) {
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
        <Breadcrumb routes={['CV']} />
        <Section title="CV database">
          {error && <div>
            <input defaultValue={this.props.params.key} onInput={this.updateKeyHandler.bind(this)} placeholder="Key ..." />
            {this.state.key && <Link to={'/cv/' + this.state.key} className="button active">Get Access</Link>}
          </div>}
          {error}
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
