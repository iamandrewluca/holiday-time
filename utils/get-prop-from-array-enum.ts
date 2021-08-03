import { PropOptions, PropType } from '@vue/composition-api'

export function getPropFromArrayEnum<TEnumValues extends ReadonlyArray<string>>(
  values: TEnumValues,
  defaultValue: TEnumValues[number]
): Required<PropOptions<TEnumValues[number]>> {
  return {
    type: String as unknown as PropType<TEnumValues[number]>,
    validator: (value: TEnumValues[number]) => values.includes(value),
    default: (): TEnumValues[number] => defaultValue,
    required: false,
  }
}
