export const FList = ({ head, id, subTitle }) => {
    return (
      <>
        <h4>{head}</h4>
        {subTitle.map((el, i) => {
          return <p key={i}>{el}</p>;
        })}
      </>
    );
  };
  