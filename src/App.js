import './App.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import StyledComponent from './Style/StyledComponent/components/StyledComponent';
import StyledComponentAdvanced from './Style/StyledComponent/components/StyledComponentAdvanced';
import EmotionComponent from './Style/Emotion/components/EmotionComponent';
import EmotionComponentAdvanced from './Style/Emotion/components/EmotionComponentAdvanced';
import SassComponent from './Style/Sass/components/SassComponent';
import OnsenUiComponent from './UI/OnsenUI/components/OnsenUiComponent';

function App() {
  return (
    <div className='App'>
      {/* <StyledComponent /> */}
      {/* <StyledComponentAdvanced /> */}
      {/* <EmotionComponent /> */}
      {/* <EmotionComponentAdvanced /> */}
      {/* <SassComponent /> */}
      <OnsenUiComponent />
    </div>
  );
}

export default App;
