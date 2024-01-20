import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">No goals found!</InfoBox>;
  }

  let warningBox;

  if (goals.length > 3) {
    warningBox = (
      <InfoBox options="low" mode="warning">
        You have too many goals!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
