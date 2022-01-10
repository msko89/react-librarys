import { RecoilRoot } from 'recoil';
import './App.css';
import FontButton from './Recoil/components/FontButton';
import Text from './Recoil/components/Text';
// import { observableTodoStore } from './app/ObservableTodoStore';
// import MobxComponent from './components/MobxComponent';
// import TodoList from './components/TodoList';
// import Counter from './features/counter/Counter';
// import MockingComponent from './Mocking/MSW/components/MockingComponent';
// import 'onsenui/css/onsenui.css';
// import 'onsenui/css/onsen-css-components.css';
// import StyledComponent from './Style/StyledComponent/components/StyledComponent';
// import StyledComponentAdvanced from './Style/StyledComponent/components/StyledComponentAdvanced';
// import EmotionComponent from './Style/Emotion/components/EmotionComponent';
// import EmotionComponentAdvanced from './Style/Emotion/components/EmotionComponentAdvanced';
// import SassComponent from './Style/Sass/components/SassComponent';
// import OnsenUiComponent from './UI/OnsenUI/components/OnsenUiComponent';
// import AntDesignComponent from './UI/AngDesign/components/AntDesignComponent';

function App() {
  return (
    <div className='App'>
      {/* <StyledComponent /> */}
      {/* <StyledComponentAdvanced /> */}
      {/* <EmotionComponent /> */}
      {/* <EmotionComponentAdvanced /> */}
      {/* <SassComponent /> */}
      {/* <OnsenUiComponent /> */}
      {/* <AntDesignComponent /> */}
      {/* <MockingComponent /> */}
      {/* <Counter /> */}
      {/* <MobxComponent /> */}
      {/* <TodoList store={observableTodoStore} /> */}
      <RecoilRoot>
        <FontButton />
        <Text />
      </RecoilRoot>
    </div>
  );
}

export default App;
