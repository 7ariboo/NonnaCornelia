const https = require('https');

https.get('https://aliceblue-mule-357158.hostingersite.com/assets/index-D7zc4mNW.js', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const matches = data.match(/`([^`]+)`|"([^"\\]*(?:\\.[^"\\]*)*)"/g);
    if (matches) {
       const texts = matches
         .map(s => s.replace(/^["`]?(.*?)["`]?$/g, '$1'))
         .filter(s => s.length > 20 && s.includes(' ') && !s.includes('function') && !s.includes('return') && !s.includes('typeof') && !s.includes('import') && !s.includes('<path') && !s.includes('Copyright') && !s.includes('px') && !s.includes('xmlns') && !s.includes('http') && !s.includes('svg') && !s.includes('viewBox') && !s.match(/^[a-zA-Z0-9_-]+$/))
         .slice(0, 500);
       console.log(texts.join('\n'));
    }
  });
});
