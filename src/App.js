// import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Example from './ReactQuery/components/Example';
import Todos from './ReactQuery/components/Todos';
import { ReactQueryDevtools } from 'react-query/devtools';
// import FontButton from './Recoil/components/FontButton';
// import Text from './Recoil/components/Text';
// import TodoList from './Recoil/components/TodoList';
// import Cache from './SWR/components/Cache';
// import Mutate from './SWR/components/Mutate';
// import Profile from './SWR/components/Profile';
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

const queryClient = new QueryClient();

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
      {/* <RecoilRoot>
        <FontButton />
        <Text />
        <TodoList />
      </RecoilRoot> */}
      {/* <Profile /> */}
      {/* <Cache /> */}
      {/* <Mutate /> */}
      <QueryClientProvider client={queryClient}>
        <Example />
        <Todos />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
