const fs = require('fs');
const file = 'c:/Users/USER/Desktop/Edu-Manager/gestion-ecole/iai-update/app/pages/candidatures/inscription/[slug].vue';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/rounded-3xl/g, 'rounded-2xl');
fs.writeFileSync(file, content);
console.log('Done');
