import { FC } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { GenerateRoute } from '@/routes';

const App: FC = () => {
  return (
    <BrowserRouter>
      <GenerateRoute />
    </BrowserRouter>
  );
};

export default App;
