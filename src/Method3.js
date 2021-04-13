import React from 'react'
import { getLinkPreview, getPreviewFromContent } from 'link-preview-js';
export default function Method3() {
    getLinkPreview('https://www.youtube.com/watch?v=MejbOFk7H6c')
  .then((data) => console.debug(data));
  var express = require('express')
  var cors = require('cors')
  var app = express()
   
  app.use(cors())
   
  app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })
   
    return (
        <div>
           hello
        </div>
    )
}
