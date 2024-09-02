import React from 'react';
import { Button } from '../ui/button';
import { toast } from '../ui/use-toast';

interface ICopyButtonProps {
    textToCopy: string;
}

export function CopyButton({ textToCopy }: ICopyButtonProps) {
    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            toast({
                title: "Texto copiado para a área de transferência!",
            });
        }).catch((err) => {
            console.error('Falha ao copiar o texto: ', err);
        });
    };

    return (
        <Button
            onClick={handleCopy}
        >
            Copiar
        </Button>
    );
};
