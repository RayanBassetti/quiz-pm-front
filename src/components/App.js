import '../css/App.css';
import RoutingSwitch from './routes/RoutingSwitch'

import UsersContextProvider from './contexts/UsersContext'

function App() {
  return (
    <UsersContextProvider>
      <RoutingSwitch />
    </UsersContextProvider>
  );
}

export default App;
