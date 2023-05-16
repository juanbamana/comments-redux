import {Container} from 'react-bootstrap'
import {Menu} from './components/Menu'
import {Modal} from './components/Modal'
import { FormAddComment } from './components/FormAddComment'
// Redux

import store from './store'
import { Provider } from 'react-redux'
import { CommentList } from './components/CommentList'


function App() {
  return (

    <Provider store={store}>
    <Menu/>
    <Container className="mt-5">
      <h1 className="text-center">COMMENTS</h1>
      <CommentList/>
    </Container>
    <Modal>
<FormAddComment></FormAddComment>
    </Modal>
    </Provider>

  );
}

export default App;
