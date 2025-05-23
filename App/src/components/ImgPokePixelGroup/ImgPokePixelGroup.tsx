import ImgPokePixel from "../ImgPokePixel/ImgPokePixel";

interface ImgPokePixelGroupProps {
  srcs: string[];
  scale?: number;
  alt?: string;
}

const ImgPokePixelGroup = ({
  srcs,
  scale = 1.75,
  alt,
}: ImgPokePixelGroupProps) => {
  console.log(srcs);
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {srcs.map((src, index) => (
        <ImgPokePixel key={index} src={src} scale={scale} alt={alt} />
      ))}
    </div>
  );
};

export default ImgPokePixelGroup;
