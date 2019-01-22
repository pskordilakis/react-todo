import { createStore } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'
import app from './reducers'

const store = createStore(app,
  {
    items: [
      { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { text: 'Proin consectetur nec ipsum sed eleifend.' },
      { text: 'Praesent scelerisque dui sed lectus lobortis porttitor.' },
      { text: 'Fusce non luctus sapien.' },
      { text: 'In vitae tempus ante.' },
      { text: 'Aliquam vel lobortis nisl.' },
      { text: 'Nulla facilisi.' },
    ],
  },
  devToolsEnhancer()
)

export default store


