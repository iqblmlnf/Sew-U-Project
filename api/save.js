const https = require('https');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Metode tidak diizinkan. Gunakan POST.' });
  }

  // Parse body safely
  let body = req.body;
  
  // In some environments body might be a string
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      return res.status(400).json({ status: 'error', message: 'Format JSON tidak valid.' });
    }
  }

  if (!body) {
    return res.status(400).json({ status: 'error', message: 'Data tidak boleh kosong.' });
  }

  const { admin_password_input, ...pageData } = body;

  if (admin_password_input !== 'sewuadmin123') {
    return res.status(401).json({ status: 'error', message: 'Password admin salah. Gagal menyimpan ke server.' });
  }

  const payload = JSON.stringify(pageData);

  const options = {
    hostname: 'jsonblob.com',
    port: 443,
    path: '/api/jsonBlob/019f6412-c02d-7780-87c9-eed30bf21c18',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  const request = https.request(options, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        res.status(200).json({ status: 'success', message: 'Konfigurasi berhasil disimpan di cloud server!' });
      } else {
        res.status(500).json({ status: 'error', message: 'Gagal menulis berkas konfigurasi di database cloud.' });
      }
    });
  });

  request.on('error', (e) => {
    res.status(500).json({ status: 'error', message: e.message });
  });

  request.write(payload);
  request.end();
};
