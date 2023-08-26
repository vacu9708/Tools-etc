const express = require('express');
const app = express();
const path=require('path')
app.use(express.static(__dirname, { dotfiles: 'allow' } ));
app.listen(80, () => {
  console.log('HTTP server running [port - 80]'); 
});

const URL='/.well-known/acme-challenge/5lfvfyvpt-XWVK3d4oHmJAECHwcs_rsgECOsMrFEyuI'
app.get(URL, function(req, res) { // React
    //const file_path_=path.join(__dirname,'/.well-known/acme-challenge/auth')
    const file='5lfvfyvpt-XWVK3d4oHmJAECHwcs_rsgECOsMrFEyuI.qvtI17Rg2icvqH-i0Mv8o73DWSAu5JO7-j6c_c8cn1Q'
    res.send(file)
})