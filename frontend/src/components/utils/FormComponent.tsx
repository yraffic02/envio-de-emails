import { ReactNode } from "react";
import { Button } from "../ui/button";

interface FormComponentProps {
  children: ReactNode;
  onSubmit: () => void;
  buttonName: string;
}

export function FormComponent({ children, onSubmit, buttonName }: FormComponentProps) {
  return (
    <form onSubmit={onSubmit} className="w-full space-y-6 shadow p-4 rounded lg:w-1/2">
      {children}
      <div className="w-full flex items-center justify-center">
        <Button type="submit" className="">{buttonName}</Button>
      </div>
    </form>
  );
}
