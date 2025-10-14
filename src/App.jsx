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
          onClick={() => pushDataLayer({ event: "mitra_analytics_clicked" })}
        >
          Clicked
        </button>
        <button
          type="button"
          onClick={() => pushDataLayer({ event: "mitra_analytics_view" })}
        >
          View
        </button>
        <button
          type="button"
          onClick={() => {
            pushDataLayer({
              event: "mitra_analytics_metric_clicked",
              metric_name: "performa_pasgar",
              status_name: "Baik",
            });
          }}
        >
          Metric Clicked performa_pasgar
        </button>
        <button
          type="button"
          onClick={() => {
            pushDataLayer({
              event: "mitra_analytics_metric_clicked",
              metric_name: "sku_produk",
              status_name: "Baik",
            });
          }}
        >
          Metric Clicked sku_produk
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
              level_name: "Perlu Ditingkatkan",
            });
          }}
        >
          Info Level Clicked Perlu Ditingkatkan
        </button>
        <button
          type="button"
          onClick={() => {
            pushDataLayer({
              event: "mitra_analytics_info_level_clicked",
              level_name: "Cukup",
            });
          }}
        >
          Info Level Clicked Cukup
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
          Info Level Clicked Baik
        </button>
        <button
          type="button"
          onClick={() => {
            pushDataLayer({
              event: "mitra_analytics_cta_clicked",
              metric_name: "performa_pasgar",
              status_name: "Baik",
              button_name: "Tambah Pasgar",
            });
          }}
        >
          CTA Clicked Tambah Pasgar
        </button>
        <button
          type="button"
          onClick={() => {
            pushDataLayer({
              event: "mitra_analytics_cta_clicked",
              metric_name: "sku_produk",
              status_name: "Baik",
              button_name: "Tambah Produk",
            });
          }}
        >
          CTA Clicked Tambah Produk
        </button>
        <button
          type="button"
          onClick={() => pushDataLayer({ event: "mitra_analytics_closed" })}
        >
          Closed
        </button>
      </div>
    </>
  );
}

export default App;
