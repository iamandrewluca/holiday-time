export function getActivitiesUrl(
  offset: number = 0,
  limit: number = 6
): string {
  return `/api/v3/venues/164/activities?limit=${limit}&${offset}=0`
}
