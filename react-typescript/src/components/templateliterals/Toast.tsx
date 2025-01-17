type HorizontalPostion = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPostion}-${VerticalPosition}`, "center-center">
    | "center";
}; // Template literals and Exclude

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};
