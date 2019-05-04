import React, { Component } from 'react'

import { connect } from 'react-redux';

class index extends Component {  

  toggleActionLesson = (module, lesson) => {
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson,
    };
  }

  render() {

    const { modules, dispatch } = this.props;
    // ao adicionar o connect nas propriedades é possível acessar a função dispatch que serve para disparar action que serão ouvidas por todos os reduces da aplicação

    return (
      <aside>
          { modules.map(module => (
            <div key={module.id}>
                <string>{module.title}</string>
                <ul>
                    {
                        module.lessons.map(lesson => (
                            <li key={lesson.id}>{lesson.title}
                            <button onClick={() => dispatch(this.toggleActionLesson(module, lesson)) }>Iniciar</button>
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

export default connect(state => ({ modules: state.sidebarReducer.modules }))(index)
// Recebe uma função com o estado => mapea o que eu quero deste estado