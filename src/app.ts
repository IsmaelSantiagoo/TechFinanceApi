// importando bibliotecas
import 'express-async-errors'
import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

// importando rotas
import customerRouter from './routers/customerRouter'

// instanciando aplicação
const app = express()

// configurando middlewares
app.use(morgan('tiny')) //logs
app.use(cors()) //requisições
app.use(helmet()) //proteção contra vulnerabilidades
app.use(express.json()) //body-parser

// configurando rotas
app.use('/customers/', customerRouter)

// tratamento global
app.use((req: Request, res:Response, next: NextFunction) => {
  res.send('Hello World!')
})

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(error.message)
})

// exportando aplicação
export default app