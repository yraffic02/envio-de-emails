
import { actionMap } from "@/configs/constants";
import { IAuthParams } from "@/configs/interfaces";
import { Mails } from "lucide-react";
import Link from "next/link";


export default function Auth({ params }: { params: IAuthParams }) {
  const { action } = params;
  const currentAction = actionMap[action];

  return (
    <main className="flex h-screen flex-col items-center justify-evenly p-4">
      <Mails size={70} />

      {<currentAction.component />}

      {currentAction.text && currentAction.linkText && (
        <div className="flex gap-3 text-end text-sm text-slate-900">
          <span>{currentAction.text}</span>
          <Link href={currentAction.linkHref!} className="underline">
            {currentAction.linkText}
          </Link>
        </div>
      )}
    </main>
  );
}
