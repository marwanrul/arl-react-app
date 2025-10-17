export const pushDataLayer = (item) => {
  window.datalayer = window.dataLayer || [];
  window.dataLayer.push(item);
};
