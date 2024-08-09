
import { FormRegister } from "@/components/auth/FormRegister";
import { Mails } from "lucide-react";
import Link from "next/link";

export default function Register() {
  return (
    <main className="flex h-screen flex-col items-center justify-evenly p-4">
      <Mails
        size={70}
      />
      <FormRegister />
      <div className="flex gap-3 text-end text-sm text-slate-900">
        <span>
          tem cadastro ?
        </span>
        <Link href='/auth/login' className="underline">
          Faça login
        </Link>
      </div>
    </main>
  );
};
