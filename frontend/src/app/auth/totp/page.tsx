import { FormTotp } from "@/components/auth/FormTotp";
import { Mails } from "lucide-react";

export default function Totp() {
  return (
    <main className="flex h-screen flex-col items-center justify-evenly p-4">
      <Mails
        size={70}
      />
      <FormTotp />
    </main>
  );
};
