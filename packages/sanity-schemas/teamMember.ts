export const teamMember = {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Full Name' },
    { name: 'title', type: 'string', title: 'Title / Designation' },
    { name: 'specialty', type: 'string', title: 'Specialty' },
    { name: 'hospital', type: 'string', title: 'Hospital / Institution' },
    { name: 'city', type: 'string', title: 'City' },
    { name: 'bio', type: 'text', title: 'Biography' },
    { name: 'quote', type: 'text', title: 'Featured Quote' },
    {
      name: 'photo',
      type: 'image',
      title: 'Photo',
      options: { hotspot: true },
    },
  ],
}

