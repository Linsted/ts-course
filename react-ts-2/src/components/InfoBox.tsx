type InfoBoxProps = {
  mode: "hint" | "warning";
  children: React.ReactNode;
};

const InfoBox = ({ mode, children }: InfoBoxProps) => {
  if (mode === "hint") {
    return <aside className="infobox infobox-hint">{children}</aside>;
  }

  return (
    <aside className="infobox infobox-warning warning--high">
      <h2>Warning!</h2>
      {children}
    </aside>
  );
};

export default InfoBox;
