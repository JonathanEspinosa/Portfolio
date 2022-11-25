import { PropsWithChildren } from "react";
function Container(props: PropsWithChildren<{ id: string; pos?: string; title: string }>) {
  return (
    <div className="section">
      <div id={props.id}  className={`title ${props.pos || "beggin"}`}>
        <h2>{props.title}</h2>
      </div>
      <div className="child">{props.children}</div>
    </div>
  );
}

export default Container;
