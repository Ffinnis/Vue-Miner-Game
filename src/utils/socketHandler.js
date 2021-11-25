import store from "@/store/index";
const socket = new WebSocket("wss://ws.coinapi.io/v1/");
const data = {
  type: "hello",
  apikey: `${process.env.VUE_APP_API_KEY}`,
  subscribe_data_type: ["ohlcv"],
  subscribe_filter_asset_id: store.state.crypto.subscribe_filter_asset_id,
  subscribe_filter_symbol_id: store.state.crypto.subscribe_filter_symbol_id,
  subscribe_filter_period_id: ["15SEC"],
};

socket.onopen = () => {
  socket.send(JSON.stringify(data));
};

socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  let crypto = message.symbol_id.replaceAll("COINBASE_SPOT_", "");
  crypto = crypto.replaceAll("_USD", "");
  return store.dispatch("createCrypto", {
    crypto: crypto,
    price: message.price_close,
  });
};

socket.onclose = (event) => {
  console.log(event.reason);
};

socket.onerror = (err) => {
  console.log(err);
};

const createNewSocket = (cryptoName) => {
  store.dispatch("createCrypto", {
    crypto: cryptoName,
    price: null,
  });
  data.subscribe_filter_asset_id = store.state.crypto.subscribe_filter_asset_id;
  data.subscribe_filter_symbol_id =
    store.state.crypto.subscribe_filter_symbol_id;
  return socket.send(JSON.stringify(data));
};

export { socket, createNewSocket };
