import Layout from "../components/Layout";

import "../styles/app.css";

const App = () => (
  <Layout>
    <main className="h-screen w-screen bg-topo flex flex-col items-center justify-start py-12">
      <section id="title">
        <h1 className="text-gray-100 font-bold text-3xl">
          The Social Distance Network
        </h1>
      </section>
      <section id="app-main" className="text-gray-100 font-body">
        <div id="channel">
          <span>#channel</span>
        </div>
        <div id="read">
          <span>read</span>
        </div>
        <div id="write">
          <span>write</span>
        </div>
      </section>
    </main>
  </Layout>
);

export default App;
