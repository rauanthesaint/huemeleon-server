import { config } from "dotenv";

class ConfigService {
  #config;

  constructor() {
    const { error, parsed } = config();
    if (error) throw new Error("[config]: Not found .env");
    if (!parsed) throw new Error("[config]: Empty file .env");
    this.config = parsed;
  }

  get(key) {
    const result = this.config[key];
    if (!result) throw new Error(`[config]: Not existing key (${key})`);
    return result;
  }
}

export default ConfigService;
