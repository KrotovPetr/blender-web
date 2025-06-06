import { ThemeProvider } from '@gravity-ui/uikit';
import './App.css';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { Scene } from './deprecated-versions/deprecated-version-1/SceneOld';

const App = () => {
  return (
    <ThemeProvider theme="light">
      <div className="content">
        <Scene />
        {/* <Model/> */}
      </div>
    </ThemeProvider>

  );
};

export default App;
