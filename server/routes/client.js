import express from "express";
import {
  getProducts,
  getCustomer,
  getTransactions,
  getGeography,
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomer);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);

export default router;
