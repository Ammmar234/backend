'use strict';

/**
 * prudent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prudent.prudent');
