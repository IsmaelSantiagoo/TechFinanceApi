// importando bibliotecas
import dotenv from 'dotenv'

// importando aplicação
import app from './app'
import { NextFunction } from 'express'

// instanciando configuração do dotenv
dotenv.config()

// armazenando porta
const PORT = parseInt(`${process.env.PORT || 3000}`)

// instanciando aplicação
app.listen(PORT, () => {
  console.log('Server is running at port: ', PORT)
})