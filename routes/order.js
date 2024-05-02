import express from "express";
import {placeOrder, 
        getMyOrders, 
        getOrderDetails, 
        getAdminOrders,
        placeOrderOnline,
        processOrder,
        paymentVerification
        } from "../controllers/order.js";
import { isAuthenticated , authorizeAdmin} from "../middlewares/auth.js";

const router = express.Router();

router.post("/createorder",placeOrder);

router.post("/paymentverification", isAuthenticated, paymentVerification);
router.post("/createorderonline",isAuthenticated,placeOrderOnline);

router.get("/myorders", isAuthenticated, getMyOrders);


router.get("/order/:_id", isAuthenticated, getOrderDetails);

// // Add Admin Middleware
router.get("/admin/orders", isAuthenticated, authorizeAdmin, getAdminOrders);
router.get("/admin/order/:_id", isAuthenticated,authorizeAdmin, processOrder);

export default router;
