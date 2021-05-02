export type BaseState<T> = {
  // I could make a custom error type, but let's keep it simple
  error: string
  loading: boolean
  data: T[]
}
