type UebersichtMilestoneTextProps = {
  title?: string;
  cause?: string;
};

export default function UebersichtMilestoneText({
  title,
  cause,
}: UebersichtMilestoneTextProps) {
  const milestoneTitle = title ? title : cause;

  return (
    <div className="milestone-text">
      <p className="milestone-title">{milestoneTitle}</p>
      {title && <p className="milestone-cause">{cause}</p>}
    </div>
  );
}
