import { AccordionComponent } from "@/components/Accordion/Accordion"
import { accordionConstants } from "@/configs/constants";
import { Mails } from "lucide-react";

export default function Login() {
  return (
    <main className="flex h-screen overflow-auto flex-col items-center">
      <div className="h-full w-full flex flex-col items-center justify-center bg-slate-500 p-2 text-white">
        <Mails
          size={80}
        />
        <h1 className="font-bold">
          Bem-vindo ao nosso aplicativo de envio de emails para sua equipe!
          Nosso app oferece uma experiência de usuário moderna e fluida, com uma interface elegante e responsiva.
          Priorizamos a segurança dos seus dados, implementando autenticação de dois fatores
          e reconhecimento facial.
          O envio de emails é realizado com segurança,
          permitindo que você gerencie a comunicação da sua equipe de maneira eficiente e protegida.
        </h1>
      </div>
      <div className="bg-stone-900 text-white p-2 pb-2 h-full w-full">
        <br />
        <h2 className="font-bold">
          Nossa aplicação é construída com as mais recentes tecnologias para garantir eficiência e segurança:
        </h2>
        <br />
        <p className="font-semibold">Front End</p>
        <AccordionComponent
          accordionObject={accordionConstants.accordionObject}
        />
      </div>
    </main>
  );
};
