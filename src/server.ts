import express from "express";
import "./database";

const app = express();

/**
 * GET = Search
 * POST = Creation
 * PUT = Update
 * PATCH = Change specific info
 * DELETE
 */

app.get("/", (request, response) => {
    return response.json({
        message: "Olá"
    })
})

app.post("/", (request, response) => {
    return response.json({
        message: "Usuário salvo com sucesso"
    })
})

app.listen(3333, () => console.log("Server is running on port 3333"));