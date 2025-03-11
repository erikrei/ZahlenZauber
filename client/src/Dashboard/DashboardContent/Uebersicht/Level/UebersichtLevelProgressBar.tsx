type UebersichtLevelProgressBarProps = {
  progressWidth: number;
};

export default function UebersichtLevelProgressBar({
  progressWidth,
}: UebersichtLevelProgressBarProps) {
  return (
    <div className="progress-container">
      <div className="progress-fill" style={{ width: `${progressWidth}%` }} />
    </div>
  );
}
