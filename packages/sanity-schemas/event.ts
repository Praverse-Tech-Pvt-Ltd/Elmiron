export const event = {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Event Title' },
    { name: 'date', type: 'datetime', title: 'Date & Time' },
    { name: 'venue', type: 'string', title: 'Venue' },
    { name: 'city', type: 'string', title: 'City' },
    { name: 'description', type: 'array', of: [{ type: 'block' }], title: 'Description' },
    {
      name: 'schedule',
      type: 'array',
      title: 'Schedule',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'time', type: 'string', title: 'Time' },
            { name: 'activity', type: 'string', title: 'Activity' },
          ],
        },
      ],
    },
    { name: 'isOpen', type: 'boolean', title: 'Accepting Registrations' },
    { name: 'capacity', type: 'number', title: 'Capacity' },
  ],
}

