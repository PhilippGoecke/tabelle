'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Tabelle Component Library');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/components');
fractal.web.set('static.path', __dirname + '/dist');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/docs');