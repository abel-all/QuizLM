import { Router } from "express";
import { z } from "zod";
import { validate } from "../middlewares/validate";
import { db } from "drizzle-orm/node-postgres"; // your configured client

const router = Router();

const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
  }),
});

router.post(
  "/",
  validate(createUserSchema),
  async (req, res, next) => {
    const { name, email, password } = req.body;
    // e.g. hash password, insert with drizzle
    try {
      const result = await db.insert(users).values({ name, email, passwordHash: "..." });
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
