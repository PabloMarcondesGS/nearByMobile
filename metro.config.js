const { getDefaultConfig } = require('expo/metro-config');
const fs = require('fs');
const gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(fs);

const config = getDefaultConfig(__dirname);

module.exports = config;
