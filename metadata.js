const express = require('express');
const app = express();

// Route for Embed
app.get('/api/embed', (req, res) => {
    const { author, title, imageurl, hexcolor, redirect, description } = req.query;

    // Correctly closing the template literal before calling res.send
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="twitter:card" content="summary">
    <meta name="description" content="${description}">
    <meta content="${author}" property='og:site_name'>
    <meta content="${imageurl}" property='og:image'>
    <meta content="200" property='og:image:width'> 
    <meta content="200" property='og:image:height'>
    <meta name="theme-color" content="#${hexcolor}">
    <title>${title}</title>
    ${redirect ? `<meta http-equiv="refresh" content="0; url=${redirect}">` : ''}
  </head>
  <body>
    <!-- Content can be added here if needed -->
    <h1>${title}</h1>
    <p>${description}</p>
  </body>
</html>
`; // Moved the backtick to correctly close the template literal

    res.send(htmlContent);
});

app.get('/api/debug', (req, res) => {
    const { author, title, imageurl, hexcolor, redirect, description } = req.query;

    const debugHtmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Debug Screen</title>
  </head>
  <body>
    <h1>Debug Information</h1>
    <p><strong>Author:</strong> ${author || 'Not Provided'}</p>
    <p><strong>Title:</strong> ${title || 'Not Provided'}</p>
    <p><strong>Image URL:</strong> ${imageurl || 'Not Provided'}</p>
    <p><strong>Hex Color:</strong> ${hexcolor ? `#${hexcolor}` : 'Not Provided'}</p>
    <p><strong>Redirect URL:</strong> ${redirect || 'Not Provided'}</p>
    </body>
    </html>
    `;
    
        res.send(debugHtmlContent);
    });
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });