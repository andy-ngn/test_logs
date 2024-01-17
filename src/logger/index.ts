import winston from "winston";
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.json(),
    winston.format.timestamp()
  ),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

export default logger;
