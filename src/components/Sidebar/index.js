import React, { Component } from 'react'

import { connect } from 'react-redux';

import * as SidebarActions from '../../store/actions/sidebar';

class index extends Component {
  render() {

    const { modules, toggleLesson } = this.props;

    console.log(SidebarActions);
    return (
      <aside>
          { modules.map(module => (
            <div key={module.id}>
                <string>{module.title}</string>
                <ul>
                    {
                        module.lessons.map(lesson => (
                            <li key={lesson.id}>{lesson.title}
                            <button onClick={() => toggleLesson(module, lesson) }>Iniciar</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            )) }
      </aside>
    )
  }
}

const mapStateToProps = state => ({ modules: state.sidebarReducer.modules })
const mapDispatchToProps = dispatch => ({
    toggleLesson: (module, lesson) => dispatch(SidebarActions.toggleActionLesson(module, lesson))
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
// Recebe uma função com o estado e posso mapear o que eu quero deste estado -> mapStateToProps
// Recebe o dispatch na segunda função -> mapDispatchToProps