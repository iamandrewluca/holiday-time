export type Activity = {
  uuid: string
  title: string
  description: string
  cover_image_url: string
  retail_price: {
    currency: string
    formatted_value: string
    value: number
  }
}
