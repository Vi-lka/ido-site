import React from "react";
import { ZodError } from "zod";

import ErrorToast from "./ErrorToast";
import NotFound from "./NotFound";

type Props = {
  error: unknown;
  place: string;
  children?: React.ReactNode;
} & (TrueNotFoundProps | FalseNotFoundProps);

type TrueNotFoundProps = {
  notFound: true;
  goBack: boolean;
};

type FalseNotFoundProps = {
  notFound: false;
};

export default function ErrorHandler(props: Props) {

  if ((props.error as Error).message === "NEXT_NOT_FOUND") {
    if (props.notFound)
      return (
        <NotFound goBack={props.goBack}>
          {props.children}
        </NotFound>
      );
    else return null;
  } else {
    console.log("ErrorHandler: ", props.error);
    return (
      <ErrorToast
        error={
          props.error instanceof ZodError
            ? props.error.issues
            : (props.error as Error).message
        }
        place={props.place}
      />
    );
  }
}
