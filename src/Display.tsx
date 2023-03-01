import { ForwardedRef, forwardRef, PureComponent } from "react";

type RefType = HTMLParagraphElement;

type PropsType = {
  content: string;
};

type PropsWithRef = PropsType & {
  forwardedRef: ForwardedRef<RefType>;
};

// export const DisplayFunction = forwardRef(
//   (props: PropsType, ref: ForwardedRef<RefType>) => (
//     <p ref={ref}>{props.content}</p>
//   )
// );

export const DisplayFunction = forwardRef<RefType, PropsType>((props, ref) => (
  <p ref={ref}>{props.content}</p>
));

class ClassDisplay extends PureComponent<PropsWithRef> {
  public render() {
    const { content, forwardedRef } = this.props;

    return <p ref={forwardedRef}>{content}</p>;
  }
}

export const DisplayClass = forwardRef<RefType, PropsType>((props, ref) => (
  <ClassDisplay forwardedRef={ref} {...props} />
));
