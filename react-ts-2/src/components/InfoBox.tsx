type HintBoxProps = {
  mode: "hint";
  children: React.ReactNode;
};

type WorningBoxProps = {
  mode: "warning";
  children: React.ReactNode;
  options: "low" | "medium" | "high";
};

type InfoBoxProps = HintBoxProps | WorningBoxProps;

const InfoBox = (props: InfoBoxProps) => {
  if (props.mode === "hint") {
    return <aside className="infobox infobox-hint">{props.children}</aside>;
  }

  return (
    <aside className={`infobox infobox-warning warning--${props.options}`}>
      <h2>Warning!</h2>
      {props.children}
    </aside>
  );
};

export default InfoBox;
