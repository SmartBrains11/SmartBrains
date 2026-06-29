// Reusable Schema Generators for Smart Brains India

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': 'https://www.smartbrainsindia.in/#organization',
    'name': 'Smart Brains India',
    'url': 'https://www.smartbrainsindia.in',
    'logo': 'https://www.smartbrainsindia.in/logo.png',
    'sameAs': [
      'https://www.facebook.com/profile.php?id=61583366865848',
      'https://www.instagram.com/smartbrainsindia.in/',
      'https://www.youtube.com/'
    ]
  };
}

export function getSearchActionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'url': 'https://www.smartbrainsindia.in',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://www.smartbrainsindia.in/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
}

export function getLocalBusinessSchema(
  name: string,
  address: string,
  city: string,
  phone: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${url}#localbusiness`,
    'name': name,
    'description': `Accredited child cognitive development training center in ${city}.`,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': address,
      'addressLocality': city,
      'addressCountry': 'IN'
    },
    'telephone': phone,
    'priceRange': '$$',
    'url': url
  };
}

export interface FAQItem {
  q: string;
  a: string;
}

export function getFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': items.map((item) => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.a
      }
    }))
  };
}

export function getCourseSchema(
  name: string,
  description: string,
  providerName: string = 'Smart Brains India'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': name,
    'description': description,
    'provider': {
      '@type': 'EducationalOrganization',
      'name': providerName,
      'sameAs': 'https://www.smartbrainsindia.in'
    }
  };
}

export function getPersonSchema(
  name: string,
  jobTitle: string,
  bio: string,
  image: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${url}#person`,
    'name': name,
    'jobTitle': jobTitle,
    'description': bio,
    'image': image,
    'url': url,
    'worksFor': {
      '@type': 'EducationalOrganization',
      'name': 'Smart Brains India',
      'url': 'https://www.smartbrainsindia.in'
    }
  };
}

export function getArticleSchema(
  headline: string,
  description: string,
  image: string,
  authorName: string,
  datePublished: string,
  dateModified: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    'headline': headline,
    'description': description,
    'image': image,
    'datePublished': datePublished,
    'dateModified': dateModified,
    'author': {
      '@type': 'Person',
      'name': authorName
    },
    'publisher': {
      '@type': 'EducationalOrganization',
      'name': 'Smart Brains India',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.smartbrainsindia.in/logo.png'
      }
    }
  };
}

export function getVideoSchema(
  name: string,
  description: string,
  thumbnailUrl: string,
  uploadDate: string,
  contentUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    'name': name,
    'description': description,
    'thumbnailUrl': thumbnailUrl,
    'uploadDate': uploadDate,
    'contentUrl': contentUrl
  };
}

export function getHowToSchema(
  name: string,
  description: string,
  steps: Array<{ name: string; text: string; image?: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': name,
    'description': description,
    'step': steps.map((step, idx) => ({
      '@type': 'HowToStep',
      'position': idx + 1,
      'name': step.name,
      'text': step.text,
      'image': step.image || 'https://www.smartbrainsindia.in/logo.png'
    }))
  };
}
