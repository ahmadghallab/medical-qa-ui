import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout';
import SuspenseFallback from './components/SuspenseFallback';
import Home from './pages';
import { ConfigProvider, theme } from 'antd';
import { defaultToken } from './utils/theme-tokens';

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
            </Routes>
          </Suspense>
        </MainLayout>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
