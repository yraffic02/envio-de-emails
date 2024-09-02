import { IFormComponentProps } from "@/configs/interfaces";
import { Button } from "../ui/button";

export function FormComponent({ children, onSubmit, buttonName }: IFormComponentProps) {
  return (
    <form onSubmit={onSubmit} className="w-full felx flex-col justify-center items-center space-y-6 shadow p-4 rounded lg:w-1/2">
      {children}
      <div className="w-full flex items-center justify-center">
        <Button type="submit" className="">{buttonName}</Button>
      </div>
    </form>
  );
}
