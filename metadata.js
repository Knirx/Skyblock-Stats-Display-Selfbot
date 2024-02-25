const express = require('express');
const app = express();

app.get('/api/embed', (req, res) => {
    const { author, title, imageurl, hexcolor, redirect, description } = req.query;

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
</html>` 
    res.send(htmlContent);
});

    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
