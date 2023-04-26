const express = require("express");
const userController = require("../../controller/user.controller");
const router = express.Router();


router
    .route("/random")
    /**
   * @api {get} /user/random get a random user
   * @apiDescription Get a random user
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=1]  Users per page
   *
   * @apiSuccess {Object[]} a random user data.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
    .get(userController.getRandomUser)

router
    .route("/all")
    /**
   * @api {get} /user/all get all user
   * @apiDescription Get all user
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=100]  Users per page
   *
   * @apiSuccess {Object[]}  all user
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
    .get(userController.getAllUser)

router.route("/save")
   /**
   * @api {post} /user/save post a user data
   * @apiDescription post a user data
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=1]  Users per page
   *
   * @apiSuccess {Object[]} post a user data.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
    .post(userController.saveUser)

router.route("/update/:id")
/**
   * @api {patch} /user/update/:id update a user by id
   * @apiDescription update a user by id
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=1]  Users per page
   *
   * @apiSuccess {Object[]} save a new user data
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
    .patch(userController.updateUser)

router.route("/bulk-update")
/**
   * @api {get} /user/bulk-update update bulk action
   * @apiDescription update some user data
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=100]  Users per page
   *
   * @apiSuccess {Object[]} update bulk user data
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
    .patch(userController.bulkUpdate)

router.route("/delete/:id")
/**
   * @api {delete} /user/delete/:id delte a user
   * @apiDescription delete a user by id
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=1]  Users per page
   *
   * @apiSuccess {Object[]} delete a user data 
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
    .delete(userController.deleteUser)

module.exports = router;