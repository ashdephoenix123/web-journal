import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const PortableTextRenderer = ({ value }) => {
  const components = {
    types: {
      image: ({ value }) => (
        <Image
          src={value.imageUrl}
          alt={value.alt || "Image"}
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      ),
    },
    block: {
      normal: ({ children }) => <p>{children}</p>,
      h2: ({ children }) => <h2>{children}</h2>,
      h3: ({ children }) => <h3>{children}</h3>,
      // Add more block renderers if needed
    },
  };
  return <PortableText value={value} components={components} />;
};
