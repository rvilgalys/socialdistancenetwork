import Layout from "../components/Layout";

const App = () => (
  <Layout>
    <main className="h-screen w-screen bg-topo flex flex-col items-center justify-start py-12">
      <section id="title">
        <h1 className="text-gray-100 font-bold text-3xl">
          The Social Distance Network
        </h1>
      </section>
      <section
        id="app-main"
        className="text-gray-100 font-body flex flex-col justify-start items-center w-full px-8"
      >
        <div
          id="channel"
          className="border-2 border-gray-300 h-12 w-full bg-dark flex flex-row items-center justify-center"
        >
          <span>#channel</span>
        </div>
        <div className="flex flex-row items-start justify-evenly w-full">
          <div
            id="read"
            className="flex-1 flex flex-col items-center justify-start border-2 border-gray-300 h-64 bg-dark"
          >
            <span>read</span>
          </div>
          <div
            id="write"
            className="flex flex-1 flex-col items-center justify-start border-2 border-gray-300 h-64 bg-dark"
          >
            <span>write</span>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default App;
