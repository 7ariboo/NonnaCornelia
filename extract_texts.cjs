const https = require('https');

https.get('https://aliceblue-mule-357158.hostingersite.com/assets/index-D7zc4mNW.js', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const matches = data.match(/"([^"\\]*(?:\\.[^"\\]*)*)"/g) || [];
    const ticks = data.match(/`([^`]+)`/g) || [];
    
    let all = [...matches, ...ticks].map(s => s.substring(1, s.length - 1));
    all = all.filter(s => {
      if (s.length < 20) return false;
      if (!s.includes(' ')) return false;
      if (s.includes('function') || s.includes('return') || s.includes('typeof') || s.includes('import')) return false;
      if (s.includes('<path') || s.includes('0 0 24 24') || s.includes('xmlns=')) return false;
      if (s.startsWith('flex') || s.startsWith('text-') || s.startsWith('bg-') || s.includes('px-')) return false;
      return true;
    });

    console.log(all.join('\n\n---\n\n'));
  });
});
