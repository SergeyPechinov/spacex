export type TOption = {
  id?: string,
  value: string,
  label: string,
}

export type TSelect = {
  title: string,
  options: TOption[],
  callback: (value: string) => void
}