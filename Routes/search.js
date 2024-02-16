import express from 'express';
import {searchPOST, downloadPOST} from '../Controllers/searchController.js'

const searchRoutes = express.Router();


searchRoutes.post('/', searchPOST);

searchRoutes.post('/download', downloadPOST)

export default searchRoutes;