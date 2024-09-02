'use client'
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Modal } from "@/components/utils/Modal";
import { AppDispatch, RootState } from "@/store/store";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserTotp, verifyIfIsTotp } from "@/store/actions/totpAcitons";
import { toggleModal } from "@/store/slices/modalSlice";
import { CopyButton } from "@/components/utils/CopyButton";

export default function ControllerTotp() {
    const dispatch = useDispatch<AppDispatch>()
    const { isTotpEnabled, image, manualInfo } = useSelector((state: RootState) => state.totp)

    const handleToggleTotp = async () => {
        await dispatch(toggleUserTotp())
    }

    const handleVerifyIfIsTotp = useCallback(async () => {
        return await dispatch(verifyIfIsTotp())
    }, [])


    useEffect(() => {
        handleVerifyIfIsTotp()
    }, [handleVerifyIfIsTotp, isTotpEnabled]);

    useEffect(() => {
        if (image) {
            dispatch(toggleModal())
        }
    }, [image])

    return (
        <div className="flex items-center justify-center gap-2">
            <Label>
                {isTotpEnabled ? 'Desativar' : 'Ativar'} autenticação de dois fatores
            </Label>
            <Switch checked={isTotpEnabled} onCheckedChange={handleToggleTotp} />
            <Modal>
                <div className="flex flex-col items-center h-full w-full text-white p-4">
                    <h1
                        className="font-bold text-center"
                    >
                        Escanei o qrcode para registrar seu autenticador
                    </h1>
                    <Image
                        src={image ?? image!}
                        width={0}
                        height={0}
                        alt="TOTP QR Code"
                        sizes="100vw"
                        className="py-4 shadow-white"
                        style={{
                            height: 'auto',
                            width: 'auto',
                            maxHeight: '70%',
                            maxWidth: '70%',
                        }}
                    />
                    {manualInfo && image ? (
                        <>
                            <p>
                                <span className="font-semibold">Chave Secreta:</span>
                                <CopyButton textToCopy={manualInfo.secret!} />
                            </p>
                            <p>
                                <span className="font-semibold">Nome da Conta:</span>
                                <CopyButton textToCopy={manualInfo.accountName!} />
                            </p>
                        </>
                    ) : (
                        <p>Carregando informações manuais...</p>
                    )}
                </div>
            </Modal>
        </div>
    )
}
