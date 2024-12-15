import express from "express"
import cors from "cors"

import { routes } from "./routes"
import { errorHandling } from "./middlewares/error-handling"

const PORT = 3333
const app = express()

app.use(express.json())
app.use(cors({ origin: '*' }));
app.use(routes)

app.use(errorHandling)

app.listen({ port: PORT, host: "0.0.0.0" }, () => console.log(`Server is running on port ${PORT}`))
