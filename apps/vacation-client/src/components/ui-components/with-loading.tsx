import { ReactElement } from "react";
import css from "../../app.module.css"

export function WithLoading(props: {
  isLoading: boolean;
  children: ReactElement;
}) {
  return props.isLoading ? (
    <span className={css.loader}>Load&nbsp;ng</span>

  ) : (
    props.children
  );
}
