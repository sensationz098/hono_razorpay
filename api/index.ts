import { Hono } from "hono";
import Razorpay from "razorpay";
import { env } from "./env/envSchema";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { handle } from "hono/vercel";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");
app.use(cors(), logger());
// razorpay
app.post("/order", async (c) => {
  const { receipt, amount } = await c.req.json();

  console.log(receipt, amount);

  const razorpay = new Razorpay({
    key_id: env.RAZORPAY_KEY,
    key_secret: env.RAZORPAY_KEY_SECRET,
  });

  var options = {
    amount: parseInt(amount) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    receipt: receipt,
  };

  const order_id = await razorpay.orders.create(options);

  return c.json({ order: order_id });
});

app.get("/", (c) => {
  return c.json({ message: "Hello Hono!" });
});

export default handle(app);
