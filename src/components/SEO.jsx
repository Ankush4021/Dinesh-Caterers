import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://dineshcaterers.in';

const pageMetadata = {
  '/': {
    title: 'Dinesh Caterers | Wedding & Event Catering in Dehradun',
    description:
      'Plan weddings, family celebrations and corporate events with Dinesh Caterers. Thoughtful vegetarian and non-vegetarian catering in Dehradun, Doiwala and nearby areas.',
  },
  '/about': {
    title: 'About Us | Dinesh Caterers',
    description:
      'Meet Dinesh Caterers and discover our approach to authentic food, thoughtful menus and warm hospitality for celebrations in Dehradun and Doiwala.',
  },
  '/services': {
    title: 'Catering Services in Dehradun & Doiwala | Dinesh Caterers',
    description:
      'Explore wedding, family celebration, pooja and corporate catering services from Dinesh Caterers in Dehradun, Doiwala and nearby areas.',
  },
  '/menu': {
    title: 'Catering Menu | Dinesh Caterers',
    description:
      'Explore Indian dishes, regional specialities and menu options for weddings, parties and events with Dinesh Caterers.',
  },
  '/contact': {
    title: 'Contact Dinesh Caterers | Dehradun & Doiwala',
    description:
      'Contact Dinesh Caterers to discuss catering for your wedding, family celebration or event in Dehradun, Doiwala and nearby areas.',
  },
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dinesh Caterers',
  url: SITE_URL,
  telephone: '+91-96341-85883',
  email: 'support.dineshcaterers@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Dehradun' },
    { '@type': 'Place', name: 'Doiwala' },
  ],
};

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export default function SEO() {
  const { pathname } = useLocation();
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');

  useEffect(() => {
    const isKnownPage = Object.prototype.hasOwnProperty.call(pageMetadata, normalizedPath);
    const page = pageMetadata[normalizedPath] || {
      title: 'Page Not Found | Dinesh Caterers',
      description: 'The requested page could not be found on Dinesh Caterers.',
    };
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`;

    document.title = page.title;
    setMeta('name', 'description', page.description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'Dinesh Caterers');
    setMeta('property', 'og:title', page.title);
    setMeta('property', 'og:description', page.description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('name', 'twitter:card', 'summary');
    setMeta('name', 'twitter:title', page.title);
    setMeta('name', 'twitter:description', page.description);
    setMeta('name', 'robots', isKnownPage ? 'index, follow' : 'noindex, follow');

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    let schema = document.getElementById('dinesh-business-schema');
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'dinesh-business-schema';
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(businessSchema);
  }, [normalizedPath]);

  return null;
}
