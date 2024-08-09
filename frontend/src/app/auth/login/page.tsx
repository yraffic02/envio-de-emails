import { FormLogin } from "@/components/auth/FormLogin";
import { Mails } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex h-screen flex-col items-center justify-evenly p-4">
      <Mails
        size={70}
      />
      <FormLogin />
      <div className="flex gap-3 text-end text-sm text-slate-900">
        <span>
          Não tem um cadastro ?
        </span>
        <Link href='/auth/register' className="underline">
          Criar uma conta
        </Link>
      </div>
    </main>
  );
};
