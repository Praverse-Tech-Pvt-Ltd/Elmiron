import groq from 'groq'

export const PRODUCT_QUERY = groq`
  *[_type == "product" && slug.current == "elmiron"][0] {
    name,
    tagline,
    genericName,
    strength,
    description,
    fdaApproved,
    formulations[]-> {
      type,
      name,
      concentration,
      dose,
      duration,
      packSize,
    },
    indications[]-> {
      name,
      slug,
      description,
      order,
    }
  }
`

export const INDICATIONS_QUERY = groq`
  *[_type == "indication"] | order(order asc) {
    name,
    slug,
    description,
    order,
  }
`

export const FORMULATIONS_QUERY = groq`
  *[_type == "formulation"] | order(_createdAt asc) {
    type,
    name,
    concentration,
    dose,
    duration,
    packSize,
    details,
  }
`

