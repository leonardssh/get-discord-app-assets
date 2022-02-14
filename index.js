const fs = require("fs");
const client = require("https");
const axios = require("axios");

const APPLICATION_ID = "";
const ASSET_SIZE = 1024;
const ASSET_FORMAT = 'png';
const ASSETS_URL = `https://discordapp.com/api/oauth2/applications/${APPLICATION_ID}/assets`;

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    client.get(url, (res) => {
      if (res.statusCode === 200) {
        res
          .pipe(fs.createWriteStream(filepath))
          .on("error", reject)
          .once("close", () => resolve(filepath));
      } else {
        // Consume response data to free up memory
        res.resume();
        reject(
          new Error(`Request Failed With a Status Code: ${res.statusCode}`)
        );
      }
    });
  });
}

axios
  .get(ASSETS_URL)
  .then(({ data }) => {
    data
      .map((asset) => ({
        imageUrl: `https://cdn.discordapp.com/app-assets/${APPLICATION_ID}/${asset.id}.${ASSET_FORMAT}?size=${ASSET_SIZE}`,
        name: asset.name,
      }))
      .forEach(({ imageUrl, name }) => {
        downloadImage(imageUrl, `${name}.png`)
          .then(console.log)
          .catch(console.error);
      });
  })
  .catch((error) => {
    console.error(error);
  });
