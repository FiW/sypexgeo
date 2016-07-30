
var express = require('express');
var app = new express();
var sypex = require('sypexgeo-vyvid');
var sypexgeo = new sypex.Geo('SxGeoCity.dat');

app.use(function(req, res) {
        res.json(sypexgeo.find(req.url.substr(1)));
});

app.listen(3000);
