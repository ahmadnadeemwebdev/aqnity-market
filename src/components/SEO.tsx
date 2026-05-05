import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function SEO({
  title = "Aqnity Market - Professional Graphic Design & Video Editing Services",
  description = "Transform your brand with Aqnity Market's expert graphic design and video editing services. 5+ years of experience, 150+ projects delivered. Get professional logos, branding, motion graphics, and more.",
  keywords = "graphic design, video editing, logo design, branding, motion graphics, digital marketing, creative studio, Pakistan",
  image = "/hero-grid.png",
  url,
  type = "website",
  author = "Aqnity Market",
  publishedTime,
  modifiedTime,
}: SEOProps) {
  const siteUrl = "https://aqnity-market.vercel.app";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Aqnity Market" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Article Specific Tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <link rel="canonical" href={fullUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Aqnity Market",
          "url": siteUrl,
          "logo": `${siteUrl}/favicon.svg`,
          "description": description,
          "foundingDate": "2019",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+92-XXX-XXXXXXX",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://github.com/ahmadnadeemwebdev"
          ],
          "serviceType": ["Graphic Design", "Video Editing", "Branding", "Digital Marketing"],
          "areaServed": "Worldwide",
          "priceRange": "$$"
        })}
      </script>
    </Helmet>
  );
}