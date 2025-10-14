import viteLogo from "/vite.svg";

function App() {
  const pushDataLayer = (item) => {
    window.datalayer = window.dataLayer || [];
    window.dataLayer.push(item);
  };

  return (
    <>
      <div className="title-wrapper">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>ARL React App</h1>
      </div>
      <div className="btn-wrapper">
        <button
          type="button"
          onClick={() => pushDataLayer({ event: "mitra_analytic_clicked" })}
        >
          Clicked
        </button>
        <button
          type="button"
          onClick={() => pushDataLayer({ event: "mitra_analytic_view" })}
        >
          View
        </button>
        <button
          type="button"
          onClick={() => {
            pushDataLayer({
              event: "mitra_analytics_metric_clicked",
              metric_name: "Performa Pasgar",
              status_name: "Baik",
            });
          }}
        >
          Metric Clicked
        </button>
        <button
          type="button"
          onClick={() => {
            pushDataLayer({ event: "mitra_analytics_info_clicked" });
          }}
        >
          Info Clicked
        </button>
        <button
          type="button"
          onClick={() => {
            pushDataLayer({
              event: "mitra_analytics_info_level_clicked",
              level_name: "Baik",
            });
          }}
        >
          Info Level Clicked
        </button>
        <button
          type="button"
          onClick={() => {
            pushDataLayer({
              event: "mitra_analytics_cta_clicked",
              metric_name: "Performa Pasgar",
              status_name: "Baik",
              button_name: "Tambah Pasgar",
            });
          }}
        >
          CTA Clicked
        </button>
      </div>
    </>
  );
}

export default App;
