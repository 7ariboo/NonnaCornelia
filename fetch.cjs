const https = require('https');

https.get('https://aliceblue-mule-357158.hostingersite.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data);
  });
});
