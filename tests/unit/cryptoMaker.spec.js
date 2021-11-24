import { CryptoMaker } from "@/utils/cryptoMaker";

test("add to cryptolist ETH and should give ['BTC', 'ETH']", () => {
  const cryptoMaker = new CryptoMaker();
  cryptoMaker.createConnection("ETH");
  expect(cryptoMaker.currentMessage.subscribe_filter_asset_id).toStrictEqual([
    "BTC",
    "ETH",
  ]);
});

test("add to cryptolist ETH and delete BTC and should give ['ETH']", () => {
  const cryptoMaker = new CryptoMaker();
  cryptoMaker.createConnection("ETH");
  cryptoMaker.deleteConnection("BTC");
  expect(cryptoMaker.currentMessage.subscribe_filter_asset_id).toStrictEqual([
    "ETH",
  ]);
});
