import * as config from "./config.json"

let env = process.env.NODE_ENV || "development" || "test"

if (env === "test" || env === "development") {
    let envConfig = config[env]

    Object.keys(envConfig).forEach(key => {
        process.env[key] = envConfig[key]
    })
}