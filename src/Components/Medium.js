import style from "./_medium.module.scss";
const Medium = (props) => {
  return (
    <div className={style.content_medium}>
      <div className={style.content_medium_question}>
        <h1> How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering! Submit
        </p>
      </div>
    </div>
  );
};
export default Medium;
