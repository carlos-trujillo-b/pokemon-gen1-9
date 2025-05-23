// ImgPokePixel.tsx
import { useRef, useState } from "react";

interface PixelImageProps {
  src: string;
  scale?: number;
  alt?: string;
}

function ImgPokePixel({ src, scale = 2, alt }: PixelImageProps) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    const img = imgRef.current;
    if (img) {
      setSize({ width: img.naturalWidth, height: img.naturalHeight });
    }
  };

  const scaledWidth = size.width * scale;
  const scaledHeight = size.height * scale;

  return (
    <div
      style={{
        width: `${scaledWidth}px`,
        height: `${scaledHeight}px`,
        imageRendering: "pixelated",
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={handleLoad}
        style={{
          width: "100%",
          height: "100%",
          imageRendering: "pixelated",
          display: "block",
        }}
      />
    </div>
  );
}

export default ImgPokePixel;
