import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "@/sanity/lib/imageBuilder";

export const PortableTextRenderer = ({ value }) => {
  const components = {
    types: {
      image: SampleImageComponent,
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

export const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);

  return (
    <div className="my-12">
      <Image
        alt={value.alt || ""}
        src={urlFor(value).url()}
        style={{
          display: isInline ? "inline-block" : "block",
          aspectRatio: width / height,
        }}
        width={width}
        height={height}
        className="mx-auto"
      />
    </div>
  );
};
