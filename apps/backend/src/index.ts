import dotenv from "dotenv";
dotenv.config();

import app from "./server";

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
