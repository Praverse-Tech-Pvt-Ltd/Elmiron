export const indication = {
  name: 'indication',
  title: 'Indication',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Condition Name' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'order', type: 'number', title: 'Display Order' },
  ],
}

