type LernBereichHeaderTextProps = {
  headline: string;
  description: string;
};

export default function LernBereichHeaderText({
  headline,
  description,
}: LernBereichHeaderTextProps) {
  return (
    <div className="learning-section-header">
      <div className="learning-section-header-text">
        <h1>{headline}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
