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
  key?: string
}

export class CVPage extends React.Component<CVPageProps, CVPageState> {
  constructor (props: any) {
    super(props)

    this.state = {
      students: [],
      key: props.params.key || null
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
          error: data.error
        }))
      } else {
        this.setState(Object.assign({}, this.state, {
          students: data.students,
          error: null
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
        <SubSection key={i} title={`${e.first_name} ${e.middle_name ? (e.middle_name + ' ') : ''}${e.last_name}`}>
          <div>Study: {e.study.toUpperCase()}</div>
          <div>Year: {e.year}</div>
          <div>CV: <a href={'/api/v1/cv/' + this.props.params.key + '/' + e.cv}>Download {e.cv.split('.').pop().toUpperCase()}-file</a></div>
        </SubSection>
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
          {students}
        </Section>
      </div>
    )
  }
}

export default CVPage
