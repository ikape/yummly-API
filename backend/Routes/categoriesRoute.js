/**
 * @swagger
 * components:
 *   schemas:
 *     FeedData:
 *       type: object
 *       required:
 *         - userId
 *         - userName
 *       properties:
 *         id:
 *           type: number
 *           description: The generated id of the users
 *           example: 4
 *         userName:
 *           type: string
 *           description: The name of your user
 *           example: ikape Isaac
 *
 */

/**
 * @swagger
 *  /categories/list:
 *  get:
 *    summary: Return list of all categories
 *    tags: [feed categories]
 *    responses:
 *      '200':
 *        description: The list of feed categories
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/FeedData'
 *
 * /reviews/list:
 *  get:
 *    summary: Return list of all reviews
 *    tags: [review list]
 *    responses:
 *      '200':
 *        description: The list of reviews
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/FeedData'
 *
 * /tags/list:
 *  get:
 *    summary: Return list of all tags
 *    tags: [tag list]
 *    responses:
 *      '200':
 *        description: The list of all Tags
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/FeedData'
 *
 * /feeds/list:
 *  get:
 *    summary: Return list of all feeds
 *    tags: [feeds list]
 *    responses:
 *      '200':
 *        description: The list of feeds
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/FeedData'
 *
 * /feeds/auto-complete:
 *  get:
 *    summary: Feeds auto-complete
 *    tags: [feed auto-complete]
 *    responses:
 *      '200':
 *        description: feeds auto-complete
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/FeedData'
 *
 *
 * /feeds/search:
 *  get:
 *    summary: search feeds
 *    tags: [feed search]
 *    responses:
 *      '200':
 *        description: search for feeds
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/FeedData'
 *
 * /feeds/list-similarities:
 *  get:
 *    summary: list-similarities of feeds
 *    tags: [feed list-similarities]
 *    responses:
 *      '200':
 *        description: list-similarities of feeds
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/FeedData'
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

const express = require("express");
const router = express.Router();
const axios = require("axios");
const { getCategories } = require("../controller/yummlyController");

//Tags- List
router.get("/list", getCategories);

module.exports = router;
