import {User} from './user'
export type Product = {
    id: string
    name: string
    price: number
    description: string
    user: User
}
