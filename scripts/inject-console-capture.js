const fs = require('fs');
const path = require('path');

function injectConsoleCapture() {
  const outDir = path.join(process.cwd(), 'out');
  
  // Check if out directory exists (static export)
  if (!fs.existsSync(outDir)) {
    console.log('No out directory found, skipping console capture injection');
    return;
  }
  
  // Read the console capture script
  const scriptPath = path.join(process.cwd(), 'public', 'dashboard-console-capture.js');
  if (!fs.existsSync(scriptPath)) {
    console.log('Console capture script not found, skipping injection');
    return;
  }
  
  const scriptContent = fs.readFileSync(scriptPath, 'utf8');
  const scriptTag = `<script>${scriptContent}</script>`;
  
  // Function to inject script into HTML files
  function injectIntoFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Inject before closing head tag or at beginning of body
    if (content.includes('</head>')) {
      content = content.replace('</head>', `${scriptTag}</head>`);
    } else if (content.includes('<body>')) {
      content = content.replace('<body>', `<body>${scriptTag}`);
    }
    
    fs.writeFileSync(filePath, content);
  }
  
  // Recursively find and process HTML files
  function processDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        processDirectory(itemPath);
      } else if (item.endsWith('.html')) {
        console.log(`Injecting console capture into: ${itemPath}`);
        injectIntoFile(itemPath);
      }
    }
  }
  
  try {
    processDirectory(outDir);
    console.log('Console capture injection completed');
  } catch (error) {
    console.error('Error during console capture injection:', error);
  }
}

// Run if called directly
if (require.main === module) {
  injectConsoleCapture();
}

module.exports = { injectConsoleCapture };