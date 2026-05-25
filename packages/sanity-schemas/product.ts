export const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Product Name' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'name' } },
    { name: 'tagline', type: 'string', title: 'Tagline' },
    { name: 'genericName', type: 'string', title: 'Generic Name' },
    { name: 'strength', type: 'string', title: 'Strength' },
    { name: 'description', type: 'array', of: [{ type: 'block' }], title: 'Description' },
    { name: 'fdaApproved', type: 'boolean', title: 'FDA Approved' },
    {
      name: 'formulations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'formulation' }] }],
    },
    {
      name: 'indications',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'indication' }] }],
    },
  ],
}

export const formulation = {
  name: 'formulation',
  title: 'Formulation',
  type: 'document',
  fields: [
    { name: 'type', type: 'string', title: 'Type', options: { list: ['Oral', 'Intravesical'] } },
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'concentration', type: 'string', title: 'Concentration' },
    { name: 'dose', type: 'string', title: 'Dosage' },
    { name: 'duration', type: 'string', title: 'Duration' },
    { name: 'packSize', type: 'string', title: 'Pack Size' },
    { name: 'details', type: 'array', of: [{ type: 'block' }], title: 'Details' },
  ],
}

