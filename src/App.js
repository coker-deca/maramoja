import { ErrorBoundary } from 'react-error-boundary';

import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Home from './Home';

function ErrorFallback({ error }) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Error: {error.message}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar key="navbar" />
      </Wrapper>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;
