import { useEffect } from "react";

export default function useSEO({ 
  title, 
  description, 
  url, 
  image, 
  type = "website",
  robots = "index, follow"
}) {
  useEffect(() => {
    const originalTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription ? metaDescription.getAttribute("content") : "";

    const setMetaTag = (attrName, attrValue, contentValue) => {
      if (!contentValue) return null;
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      let created = false;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
        created = true;
      }
      const previousValue = element.getAttribute("content");
      element.setAttribute("content", contentValue);
      return { element, previousValue, created };
    };

    const setLinkTag = (relValue, hrefValue) => {
      if (!hrefValue) return null;
      let element = document.querySelector(`link[rel="${relValue}"]`);
      let created = false;
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", relValue);
        document.head.appendChild(element);
        created = true;
      }
      const previousValue = element.getAttribute("href");
      element.setAttribute("href", hrefValue);
      return { element, previousValue, created };
    };

    // Enforce no trailing slash on URLs except root
    const formattedUrl = url ? (url.endsWith('/') && url.length > 30 ? url.slice(0, -1) : url) : null;
    const defaultImage = "/images/projects/gems-health.png";
    let finalImage = image || defaultImage;
    if (finalImage.startsWith("/")) {
      finalImage = `https://neorizsolutions.com${finalImage}`;
    }

    if (title) document.title = title;
    
    if (description && metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    const ogUrl = setMetaTag("property", "og:url", formattedUrl);
    const ogTitle = setMetaTag("property", "og:title", title);
    const ogDesc = setMetaTag("property", "og:description", description);
    const ogImage = setMetaTag("property", "og:image", finalImage);
    const ogType = setMetaTag("property", "og:type", type);
    const ogSiteName = setMetaTag("property", "og:site_name", "NEORIZ Solutions");

    const twCard = setMetaTag("name", "twitter:card", "summary_large_image");
    const twTitle = setMetaTag("name", "twitter:title", title);
    const twDesc = setMetaTag("name", "twitter:description", description);
    const twImage = setMetaTag("name", "twitter:image", finalImage);
    
    const robotsMeta = setMetaTag("name", "robots", robots);

    const canonical = setLinkTag("canonical", formattedUrl);

    return () => {
      if (title) document.title = originalTitle;
      if (description && metaDescription) {
        metaDescription.setAttribute("content", originalDescription);
      }
      const cleanMeta = (metaInfo) => {
        if (!metaInfo) return;
        if (metaInfo.created) {
          metaInfo.element.remove();
        } else if (metaInfo.previousValue !== null) {
          metaInfo.element.setAttribute("content", metaInfo.previousValue);
        }
      };
      const cleanLink = (linkInfo) => {
        if (!linkInfo) return;
        if (linkInfo.created) {
          linkInfo.element.remove();
        } else if (linkInfo.previousValue !== null) {
          linkInfo.element.setAttribute("href", linkInfo.previousValue);
        }
      };

      cleanMeta(ogUrl);
      cleanMeta(ogTitle);
      cleanMeta(ogDesc);
      cleanMeta(ogImage);
      cleanMeta(ogType);
      cleanMeta(ogSiteName);
      cleanMeta(twCard);
      cleanMeta(twTitle);
      cleanMeta(twDesc);
      cleanMeta(twImage);
      cleanMeta(robotsMeta);
      cleanLink(canonical);
    };
  }, [title, description, url, image, type, robots]);
}
