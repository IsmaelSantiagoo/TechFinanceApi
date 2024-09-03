// importando bibliotecas
import { Request, Response, NextFunction } from "express";

// importando models
import Customer from "../models/customer";

// importando repositories
import customerRepository from "../repositories/customerRepository";

// controlador para buscar customers
async function getCustomer(req: Request, res: Response, next: NextFunction) {

  const id = req.params.id
  const customer = await customerRepository.getCustomer(parseInt(id))

  if (customer)
    res.json(customer)
  else
    res.sendStatus(404)
}

// controlador para buscar customers
async function getCustomers(req: Request, res: Response, next: NextFunction) {

  const customers = await customerRepository.getCustomers()
  res.json(customers)
}

// controlador para criar customer
async function postCustomer(req: Request, res:Response, next: NextFunction) {

  const customer = req.body as Customer
  const result = await customerRepository.addCustomer(customer)

  if (result) 
    res.status(200).json(result)
  else
    res.sendStatus(400)
}

// controlador para atualizar customer
async function patchCustomer(req: Request, res:Response, next: NextFunction) {

  const id = req.params.id
  const customer = req.body as Customer
  const result = await customerRepository.updateCustomer(parseInt(id), customer)

  if (result)
    res.json(result)
  else
    res.sendStatus(404)
}

// controlador para deletar customer
async function deleteCustomer(req: Request, res:Response, next:NextFunction) {

  const id = req.params.id
  const success = await customerRepository.deleteCustomer(parseInt(id))

  if (success)
    res.sendStatus(204)
  else
    res.sendStatus(404)
}

// exportando controllers
export default {
  getCustomer,
  getCustomers,
  postCustomer,
  patchCustomer,
  deleteCustomer
}