/*
 * dev-server.js
 * Copyright (C) 2016 tristan <tristan@tristan-VirtualBox>
 *
 * Distributed under terms of the MIT license.
 */

"use strict";

var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./mock-config');
var app = express();

var jsonFileBase = './mock-config/data';
var postfix = 's';
function isFunction(obj) {
    return Object.prototype.toString.call(obj) == '[object Function]';
}
function route(fileName) {
    return function(req, res) {
        console.log(req.body);
        var fn = fileName;
        var args = process.argv;
        if (isFunction(fn)) fn = fn(req);
        setTimeout(function() {
            jsonFromFile(res, fn);
        }, 500);
    };
}

function jsonFromFile(res, fileName) {
    fs.readFile(fileName, {encoding:'utf8'}, function(err, data) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.json(JSON.parse(data));
    });
}

function gets(router, routes) {
    routes.forEach(function(r) {
        var p;
        var url;
        if (typeof r == 'string') {
            url = r;
            p = path.join(jsonFileBase, r.replace(/\/:[^\/]+(?=[\/$])/g, ''));
            if (p[p.length - 1] == '/') p = p.substr(0, p.length - 1);
            p += '.json';
        } else {
            url = r.url;
            p = path.join(jsonFileBase, r.response);
        }
        router.get(url, route(p));
    });
}

function posts(router, routes, method) {
    if (!method) method = 'post';
    routes.forEach(function(r) {
        if (typeof r == 'string') {
            router[method](r, function(req, res) {
                console.log(req.body);
                res.json({
                    status: 0,
                    message: '操作成功',
                    data: null
                })
            });
        } else {
            router[method](r.url, function(req, res) {
                console.log(req.body);
                jsonFromFile(res, path.join(jsonFileBase, r.response));
            });
        }
    })
}

function deletes(router, routes) {
    posts(router, routes, 'delete');
}

function puts(router, routes) {
    posts(router, routes, 'put');
}

var methods = {gets, posts, deletes, puts};

app.use(function(req, res, next) {
	console.log(req.originalUrl);
	next();
});
app.use(cors({
    origin: true,
    credentials: true,
    exposedHeaders: 'access-token'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var router = express.Router();
Object.getOwnPropertyNames(config).forEach(function(method) {
    methods[method + postfix](router, config[method]);
});

app.use('/', router);

var server = app.listen(process.argv[2] || 3334, function() {
	var address = server.address();
	console.log('api server is running at:' + address.port);
});
