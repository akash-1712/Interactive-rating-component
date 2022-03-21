import { useCallback, useState } from "react";
import style from "./_Bottom.module.scss";

var star = null;
const Bottom = (props) => {
  const starHandler = useCallback(
    (id, x = "ok") => {
      if (x === "click") {
        star = id;
      }
      const validId = [];
      for (var i = 0; i < props.star.length; ) {
        if (x !== "click" && id === -1) {
          break;
        }
        if (props.star[i] === id) {
          validId.push(id);
          break;
        } else {
          validId.push(props.star[i]);
        }
        i = i + 1;
      }
      const className = style.star_list;
      const classNames = style.star_list_active + " " + className;
      const mouseEvent =
        x !== "click" ? starHandler.bind(null, -1, "leave") : () => {};
      const data = props.star.map((data, index) => (
        <li
          {...(validId[index] === data
            ? { className: classNames }
            : { className: className })}
          key={data}
          id={data}
          onClick={starHandler.bind(null, data, "click")}
          onMouseEnter={starHandler.bind(null, data, "over")}
          onMouseLeave={mouseEvent}
        >
          <p>{data}</p>
        </li>
      ));
      setStarData(data);
    },
    [props.star]
  );

  const data = props.star.map((data) => (
    <li
      className={style.star_list}
      key={data}
      id={data}
      onClick={starHandler.bind(null, data, "click")}
      onMouseEnter={starHandler.bind(null, data, "over")}
      onMouseLeave={starHandler.bind(null, -1, "leave")}
    >
      <p>{data}</p>
    </li>
  ));
  const [starData, setStarData] = useState(data);

  return (
    <div className={style.content_bottom}>
      <ul className={style.star}>{starData}</ul>
      <button className={style.button} onClick={props.onClick.bind(null, star)}>
        Submit
      </button>
    </div>
  );
};
export default Bottom;
