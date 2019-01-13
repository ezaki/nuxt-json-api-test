const fs = require('fs')

const deployFuncPath = "functions/deploy.js"

const dp = fs.readFileSync(deployFuncPath, {encoding: "utf-8"})

const out = dp.replace(/HOOK_URL/g, process.env.HOOK_URL)

fs.writeFileSync(deployFuncPath, out, {encoding: "utf-8"})
