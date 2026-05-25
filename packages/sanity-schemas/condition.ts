export const condition = {
  name: 'condition',
  title: 'Condition',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Condition Name' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    {
      name: 'category',
      type: 'string',
      title: 'MISSED Category',
      options: {
        list: [
          { title: 'M — Microbiome / Mast Cell', value: 'M' },
          { title: 'I — Interstitial Cystitis', value: 'I' },
          { title: 'S — Stress / Somatic', value: 'S1' },
          { title: 'S — Structural', value: 'S2' },
          { title: 'E — Endometriosis / Endocrine', value: 'E' },
          { title: 'D — Dysbiosis / Deficiency', value: 'D' },
        ],
      },
    },
    { name: 'overview', type: 'text', title: 'Overview' },
    { name: 'symptoms', type: 'array', of: [{ type: 'block' }], title: 'Symptoms' },
    {
      name: 'pathophysiology',
      type: 'array',
      of: [{ type: 'block' }],
      title: 'Pathophysiology',
    },
    { name: 'treatment', type: 'array', of: [{ type: 'block' }], title: 'Treatment' },
    { name: 'relatedProduct', type: 'reference', to: [{ type: 'product' }] },
  ],
}

