import { AccordionComponent } from "@/components/Accordion/Accordion"
import { accordionConstants } from "@/configs/constants";
import { Mails } from "lucide-react";

export default function Login() {
  return (
    <main className="h-screen overflow-auto items-start lg:flex">
      <div className="h-full w-full flex flex-col items-center justify-center bg-slate-500 p-2 text-white">
        <Mails
          size={80}
        />
        <h1 className="font-bold">
          Bem-vindo ao nosso aplicativo!
          Nosso app oferece uma experiência de usuário moderna e fluida, com uma interface elegante e responsiva.
          Priorizamos a segurança dos seus dados, implementando autenticação de dois fatores.
        </h1>
      </div>
      <div className="bg-stone-900 text-white p-2 pb-2 h-full w-full overflow-auto">
        <br />
        <h2 className="font-bold">
          Nossa aplicação é construída com as mais recentes tecnologias para garantir eficiência e segurança:
        </h2>
        <br />
        <h3 className="font-semibold">Tecnologias</h3>
        <AccordionComponent
          accordionObject={accordionConstants.accordionObject}
        />
      </div>
    </main>
  );
};
