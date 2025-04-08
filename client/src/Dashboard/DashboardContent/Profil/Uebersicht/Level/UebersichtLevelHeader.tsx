import UebersichtLevel from "./UebersichtLevel";

type UebersichtLevelHeaderProps = {
  level: number;
};

export default function UebersichtLevelHeader({
  level,
}: UebersichtLevelHeaderProps) {
  return (
    <div className="level-header">
      <h3>Level</h3>
      <UebersichtLevel level={level} />
    </div>
  );
}
