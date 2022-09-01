import PageContextProvider from "./store/page-provider";

import Layout from "./components/layout/Layout";

import "./index.css";

const App: React.FC = () => {
  return (
    <PageContextProvider>
      <Layout />
    </PageContextProvider>
  );
};

export default App;
