type LernbereichNotFoundProps = {
  type: "learning" | "lessons";
};

export default function LernbereichNotFound({
  type,
}: LernbereichNotFoundProps) {
  let notFoundType = "";

  if (type === "learning") notFoundType = "Übungen";
  if (type === "lessons") notFoundType = "Lektionen";

  return (
    <p className="learning-section-not-found">
      Es konnten keine {notFoundType} gefunden werden.
    </p>
  );
}
