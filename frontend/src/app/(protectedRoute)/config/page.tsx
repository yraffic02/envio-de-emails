import ControllerTotp from "./components/ControllerTotp/ControllerTotp";

export default function Config() {

    return (
        <main className="h-screen">
            <div className="p-4 flex flex-col">
                <h1 className="font-semibold text-center">Configurações</h1>
                <ControllerTotp />
            </div>
        </main>
    )
}