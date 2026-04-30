export interface BudgetEntry {
  id: string
  label: string
  planned: number
  realized: number
  percentage: number
}

export interface BudgetCategory {
  title: string
  total_planned: number
  total_realized: number
  items: BudgetEntry[]
}

export interface VillageBudget {
  year: number
  last_updated: string
  income: BudgetCategory
  expenditure: BudgetCategory
  financing: BudgetCategory
}
