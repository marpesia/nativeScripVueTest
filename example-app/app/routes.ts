import App from './components/App.vue'
import Form from './pages/Form/Form.vue'
import List from './pages/List/List.vue'

export const routes = {
  'home': {
    component: App
  },
  'form': {
    component: Form
  },
  'list': {
    component: List
  }
}
