export type MenuItem = {
  to: string
  title: string
}

export type MenuItemWithSubItems = MenuItem & {
  items: MenuItem[]
}
