import '../css/App.css';
import RoutingSwitch from './routes/RoutingSwitch'

import UsersContextProvider from './contexts/UsersContext'
import QuizContextProvider from './contexts/QuizContext';

function App() {
  return (
    <UsersContextProvider>
      <QuizContextProvider>
        <RoutingSwitch />
      </QuizContextProvider>
    </UsersContextProvider>
  );
}

export default App;
