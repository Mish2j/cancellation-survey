import PageContextProvider from "./store/page-provider";
import ModalContextProvider from "./store/modal-provider";

import Layout from "./components/layout/Layout";

import "./index.css";

const App: React.FC = () => {
  return (
    <PageContextProvider>
      <ModalContextProvider>
        <Layout />
      </ModalContextProvider>
    </PageContextProvider>
  );
};

export default App;
