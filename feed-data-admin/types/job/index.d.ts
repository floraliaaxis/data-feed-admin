export interface Job {
  step: string
  status: string
  dataProcessed: number
  total: number
  percentage?: number
}
