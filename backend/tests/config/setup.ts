// setup.ts
import config from "../../src/config";
globalThis.BASE_URL = `http://${config.host}:${config.port}`;