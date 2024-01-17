import { useState } from "react";

import CourseGoal from "./components/CourseGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = () => {
    setGoals((prevState) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: " Learn JS",
        description: "Learn ASAP",
      };
      return [...prevState, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) =>
    setGoals((prevState) => prevState.filter((goal) => goal.id !== id));
  return (
    <main>
      <button onClick={handleAddGoal}>Add Goal</button>
      {goals.map((goal) => {
        return (
          <CourseGoal
            key={goal.id}
            title={goal.title}
            onDelete={handleDeleteGoal}
            id={goal.id}
          >
            <p>{goal.description}</p>
          </CourseGoal>
        );
      })}
    </main>
  );
}
