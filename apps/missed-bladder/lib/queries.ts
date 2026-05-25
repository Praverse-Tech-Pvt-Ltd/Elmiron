import groq from 'groq'

export const CONDITIONS_QUERY = groq`
  *[_type == "condition"] | order(category asc) {
    name,
    slug,
    category,
    overview,
    relatedProduct-> { name, slug }
  }
`

export const CONDITION_QUERY = groq`
  *[_type == "condition" && slug.current == $slug][0] {
    name,
    slug,
    category,
    overview,
    symptoms,
    pathophysiology,
    treatment,
    relatedProduct-> {
      name,
      slug,
      genericName,
      strength,
    }
  }
`

export const EVENTS_QUERY = groq`
  *[_type == "event" && isOpen == true] | order(date asc) [0] {
    title,
    date,
    venue,
    city,
    description,
    schedule,
    capacity,
  }
`

export const TEAM_QUERY = groq`
  *[_type == "teamMember"] [0] {
    name,
    title,
    specialty,
    hospital,
    city,
    bio,
    quote,
  }
`

