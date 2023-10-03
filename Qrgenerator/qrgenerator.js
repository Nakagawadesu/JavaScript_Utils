const QRCode = require('qrcode');

// Define the URL you want to encode
const url = 'https://mapa-do-tesouro.occamengenharia.com.br/auth/register';

// Define QR code options
const options = {
  width: 600,    // Set the width of the QR code (in pixels)
  height: 600,   // Set the height of the QR code (in pixels)
  quality: 1   // Set the quality of the QR code (between 0 and 1)
};

// Generate the QR code
QRCode.toDataURL(url, options, function (err, dataURL) {
  if (err) {
    console.error(err);
  } else {
    console.log(dataURL);
  }
});