const QuestionsCounterBadge = (props) => {
  return (
    <div
      style={{
        borderRadius: "50%",
        backgroundColor: "grey",
        height: "6em",
        width: "6em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {`# ${props.questionsCounter}`}
    </div>
  );
};

export default QuestionsCounterBadge;
