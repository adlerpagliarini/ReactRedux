import React, { Component } from 'react'

import { connect } from 'react-redux';

class index extends Component {  
  render() {

    const { modules } = this.props;

    return (
      <aside>
          { modules.map(module => (
            <div key={module.id}>
                <string>{module.title}</string>
                <ul>
                    {
                        module.lessons.map(lesson => (
                            <li key={lesson.id}>{lesson.title}</li>
                        ))
                    }
                </ul>
            </div>
            )) }
      </aside>
    )
  }
}

export default connect(state => ({ modules: state.modules }))(index)
// Recebe uma função com o estado => mapea o que eu quero deste estado