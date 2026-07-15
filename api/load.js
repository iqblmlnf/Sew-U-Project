const https = require('https');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Disable Caching
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  https.get('https://jsonblob.com/api/jsonBlob/019f6412-c02d-7780-87c9-eed30bf21c18', (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      if (response.statusCode === 200) {
        try {
          const jsonData = JSON.parse(data);
          res.status(200).json(jsonData);
        } catch (e) {
          res.status(500).json({ status: 'error', message: 'Format data database rusak.' });
        }
      } else {
        res.status(response.statusCode).json({ status: 'error', message: 'Gagal memuat data dari cloud database.' });
      }
    });
  }).on('error', (e) => {
    res.status(500).json({ status: 'error', message: e.message });
  });
};
