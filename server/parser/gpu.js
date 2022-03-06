const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://www.kryptex.org/en/best-gpus-for-mining";

function gpu() {
  return axios.get(url).then((response) => {
    const gpuList = [];
    const $ = cheerio.load(response.data);
    $("table tbody tr").each((i, elem) => {
      gpuList.push({
        id: i,
        name: $(elem).find("td:nth-child(1) span").text(),
        price: Number($(elem).find("td:nth-child(2)").text().replace("$", "")),
        hash: Number(
          $(elem).find("td:nth-child(3)").text().replace(" Mh/s", "")
        ),
      });
    });
    return gpuList.filter((item) => Number(item.hash) > 0);
  });
}

module.exports = gpu;
