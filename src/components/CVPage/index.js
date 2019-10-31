import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../PageLayout'
import { Breadcrumb } from '../Common/breadcrumb'
import { API_URL } from '../../constants'

export class CVPage extends Component {
  constructor(props) {
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

  componentWillReceiveProps(nextProps) {
    this.fetchStudents(nextProps)
  }

  fetchStudents(props = this.props) {
    let setup = process.env.NODE_ENV === 'production' ? {} : { mode: 'cors' }

    fetch(`${API_URL}/cv/${props.params.key || ''}`, setup)
      .then(r => r.json())
      .then(data => {
        let groups = []
        let years = []
        let studyCodes = []

        for (let student of data.students) {
          if (groups.indexOf(student.group) === -1) groups.push(student.group)
          if (years.indexOf(student.year) === -1) years.push(student.year)
          if (studyCodes.indexOf(student.study) === -1)
            studyCodes.push(student.study)
        }

        this.setState(
          Object.assign({}, this.state, {
            students: data.students,
            error: data.error || null,
            public: !props.params.key || !!data.error,
            categories: {
              groups: groups,
              years: years,
              studyCodes: studyCodes,
            },
          })
        )
      })
  }

  updateKeyHandler(evt) {
    this.setState(
      Object.assign({}, this.state, {
        key: evt.target.value,
        error: '',
      })
    )
  }

  render() {
    let students = null
    let error = null

    if (this.state.error) {
      error = (
        <div style={{ color: 'red', fontStyle: 'italic' }}>
          {this.state.error}
        </div>
      )
    }

    if (this.state.students) {
      students = this.state.students.map((e, i) => (
        <div key={i} className="row">
          <span data-colname="Name" className="col col-name">
            <span>{`${e.first_name} ${
              e.middle_name ? e.middle_name + ' ' : ''
            }${e.last_name}`}</span>
          </span>
          <span data-colname="Study" className="col col-study">
            <span>
              {e.year}. {e.study.toUpperCase()}
            </span>
          </span>
          <span data-colname="Group" className="col col-group">
            <span>{e.group}</span>
          </span>
          <span data-colname="Description" className="col col-desc">
            <span
              dangerouslySetInnerHTML={{
                __html: e.description.replace(/\\r\\n|\\n/g, '<br />'),
              }}
            />
          </span>
          <span data-colname="CV" className="col col-cv">
            <span>
              <a href={'/api/v1/cv/' + this.props.params.key + '/' + e.cv}>
                {e.cv
                  .split('.')
                  .pop()
                  .toUpperCase()}
                -file
              </a>
            </span>
          </span>
        </div>
      ))
    }

    return (
      <div className="page page-cv">
        <Section titleText="CV database">
          {this.state.public && (
            <div>
              <input
                defaultValue={this.props.params.key}
                onInput={this.updateKeyHandler.bind(this)}
                placeholder="Key for profiles"
              />
              {this.state.key && (
                <Link to={'/cv/' + this.state.key} className="button active">
                  Access profiles
                </Link>
              )}
            </div>
          )}
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
