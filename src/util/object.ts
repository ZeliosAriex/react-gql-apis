/**
 * Checks if value is an empty object
 * @param obj The object to check
 */
export const isEmpty = (obj: Record<string, unknown>): boolean =>
  Object.entries(obj).length === 0
