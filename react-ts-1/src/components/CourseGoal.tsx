type CourseGoalProps = {
  title: string;
  children: React.ReactNode;
  onDelete: (id: number) => void;
  id: number;
};

const CourseGoal = ({ title, children, onDelete, id }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
