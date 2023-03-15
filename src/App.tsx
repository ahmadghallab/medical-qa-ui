import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout';
import SuspenseFallback from './components/SuspenseFallback';
import { ConfigProvider, theme } from 'antd';
import { defaultToken } from 'utils/theme-tokens';

const Home = lazy(() => import('pages'));
const Branches = lazy(() => import('pages/branches'));
const Topics = lazy(() => import('pages/topics'));
const Titles = lazy(() => import('pages/titles'));
const Questions = lazy(() => import('pages/questions'));

const customRenderEmpty = () => (
  <div style={{ textAlign: 'center' }}>No data</div>
);

function App() {
  const { darkAlgorithm } = theme;

  return (
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
        token: defaultToken,
      }}
      renderEmpty={customRenderEmpty}
    >
      <BrowserRouter>
        <MainLayout>
          <Suspense fallback={<SuspenseFallback />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/branches' element={<Branches />} />
              <Route path='/topics/branch/:branchId' element={<Topics />} />
              <Route path='/titles/topic/:topicId' element={<Titles />} />
              <Route path='/questions/title/:titleId' element={<Questions />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
