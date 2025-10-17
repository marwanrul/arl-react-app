import { pushDataLayer } from "../helpers/utils";

function About() {
  return (
    <div className="btn-wrapper">
      <button
        type="button"
        onClick={() => pushDataLayer({ event: "mitra_analytics_closed" })}
      >
        Closed
      </button>
      <button
        type="button"
        onClick={() => {
          pushDataLayer({ event: "button_click", type: "decrement" });
        }}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => {
          pushDataLayer({ event: "button_click", type: "increment" });
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default About;
