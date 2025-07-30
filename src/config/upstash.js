import { Redis } from "@upstash/redis";
import pkg from "@upstash/ratelimit";
import "dotenv/config";

const { Ratelimit } = pkg;

// Use Ratelimit.fixedWindow or Ratelimit.slidingWindow *methods on the class*
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "60 s"), 
});

export default ratelimit;
