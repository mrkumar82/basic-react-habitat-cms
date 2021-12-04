import ReactHabitat from 'react-habitat'
import Heading from './components/Heading'
import JsonComponent from './components/JasonComponent'
class MyApp extends ReactHabitat.Bootstrapper {
  constructor() {
    super()

    // Create a new container builder:
    const builder = new ReactHabitat.ContainerBuilder()

    // Register a component:
    builder.register(Heading).as('Heading')
    builder.register(JsonComponent).as('JsonComponent')

    // Finally, set the container:
    this.setContainer(builder.build())
  }
}

// Always export a 'new' instance so it immediately evokes:
export default new MyApp()
