import React, {JSX} from 'react';
import {Layout} from "./components/Layout/Layout";
import {TaskPage} from "./pages/TaskPage/TaskPage";

const App = (): JSX.Element => {
  return (
    <Layout>
      <TaskPage />
    </Layout>
  );
}

export default App;
