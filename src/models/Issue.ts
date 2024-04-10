import { User } from "./User"

export interface Issue{
    id:number
    name:string
    raisedAt:string
    resolvedAt:string
    status:string
    raisedBy:User
    resolvedBy:number;
    issueStatus: string
}