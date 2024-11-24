import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import { Provider } from 'react-redux';
import store from './utils/store.js';
import MainContainer from './components/MainContainer.jsx';
import WatchPage from './components/WatchPage.jsx';

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [
    {
      path: '/',
      element: <MainContainer />
    },
    {
      path: 'watch',
      element: <WatchPage />
    }
  ]
}]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header></Header>
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

/**
 * Header
 * Body
 *   Sidebar
 *      MenuItems
 *   MainContainer
 *      ButtonList
 *      VideoContainer
 *          VideoCard
 *
 */

export default App;
