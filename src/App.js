import './App.css';
import StyledComponent from './Style/StyledComponent/components/StyledComponent';
import StyledComponentAdvanced from './Style/StyledComponent/components/StyledComponentAdvanced';
import EmotionComponent from './Style/Emotion/components/EmotionComponent';
import EmotionComponentAdvanced from './Style/Emotion/components/EmotionComponentAdvanced';
import SassComponent from './Style/Sass/components/SassComponent';

function App() {
  return (
    <div className='App'>
      {/* <StyledComponent /> */}
      {/* <StyledComponentAdvanced /> */}
      {/* <EmotionComponent /> */}
      {/* <EmotionComponentAdvanced /> */}
      <SassComponent />
    </div>
  );
}

export default App;
