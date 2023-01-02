const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
  deleteManyUsers,
  updateManyUsers,
} = require('../controller/user');
const {
  isLoggedIn,
  isAmin,
  acceptIfUserAuthorized,
  deleteIfValid,
  deleteManyIfValid,
} = require('../middleware/userValidation');
const { registerValidation } = require('../middleware/auth');

router.get('/api/v1/getAllUsers', isLoggedIn, isAmin, getAllUsers);

router.get(
  '/api/v1/getUserById/:userId',
  isLoggedIn,
  acceptIfUserAuthorized,
  getUserById
);

router.delete(
  '/api/v1/deleteUserById/:userId',
  isLoggedIn,
  acceptIfUserAuthorized,
  deleteIfValid,
  deleteUserById
);

router.patch(
  '/api/v1/updateUserById/:userId',
  isLoggedIn,
  acceptIfUserAuthorized,
  registerValidation,
  updateUserById
);

router.delete(
  '/api/v1/deleteManyUsers',
  isLoggedIn,
  isAmin,
  deleteManyIfValid,
  deleteManyUsers
);

router.patch('/api/v1/updateManyUsers', updateManyUsers);

module.exports = router;
