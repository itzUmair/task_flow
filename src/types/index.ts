import { ReactNode } from "react"

export type userDataStructute = {
  _id: string,
  first_name: string,
  last_name: string,
  email: string,
  badgeColor: string

}

export type childComponent = {
  children: ReactNode
}

export type tasksStructure = {
  _id: string,
  title: string,
  description: string,
  priority: string,
  deadline: Date,
  state: string,
  completionDate: Date,
  completedBy: string,
  createdBy: string,
  createdOn: Date,
}

export type teamStucture = {
  badgeColor: string,
  createdBy: string,
  description: string,
  logs: string[],
  members: string[],
  name: string,
  tasks: tasksStructure[],
  __v: number
  _id: string
}

export type teamMemberStructure = {
  _id: string,
  first_name: string,
  last_name: string,
  badgeColor: string,
  email: string,
}