import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

export function jsonApiPlugin() {
  return {
    name: "json-api-plugin",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === "/api/data") {
          const currentFileDir = dirname(fileURLToPath(import.meta.url));
          const dataPath = resolve(currentFileDir, "data.json");
          fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
              res.statusCode = 500;
              res.end("Internal Server Error");
              return;
            }
            res.setHeader("Content-Type", "application/json");
            res.end(data);
          });
        } else {
          next();
        }
      });
    },
  };
}
