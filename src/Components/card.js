import { useState } from "react";
import Bottom from "./Bottom";
import Medium from "./Medium";
import style from "./_Card.module.scss";
import Top from "./Top";
import Back from "./Back";

const Card = (props) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [noOfStar, setNoOfStar] = useState(0);
  const SubmitHandler = (data) => {
    if (data === null) {
      alert("please Rate!");
      return;
    }
    setNoOfStar(data);
    setIsSubmit(true);
  };

  return (
    <div className={style.card}>
      <div
        className={`${style.card_inner} ${isSubmit && style.card_inner_submit}`}
      >
        <section className={`${style.content}`}>
          <Top></Top>
          <Medium></Medium>
          <Bottom star={props.star} onClick={SubmitHandler}></Bottom>
        </section>
        <Back star={noOfStar}></Back>
      </div>
    </div>
  );
};
export default Card;
