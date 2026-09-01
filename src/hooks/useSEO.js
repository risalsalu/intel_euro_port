import { useEffect } from "react";

export default function useSEO({ title, description, url, image }) {
  useEffect(() => {
    const originalTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription ? metaDescription.getAttribute("content") : "";

    const setMetaTag = (attrName, attrValue, contentValue) => {
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

    if (title) document.title = title;
    
    if (description && metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    const ogUrl = url ? setMetaTag("property", "og:url", url) : null;
    const ogTitle = title ? setMetaTag("property", "og:title", title) : null;
    const ogDesc = description ? setMetaTag("property", "og:description", description) : null;
    const ogImage = image ? setMetaTag("property", "og:image", image) : null;
    const canonical = url ? setLinkTag("canonical", url) : null;

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
      cleanLink(canonical);
    };
  }, [title, description, url, image]);
}
