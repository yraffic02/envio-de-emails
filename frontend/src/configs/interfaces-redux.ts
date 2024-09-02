export interface ITotpStates {
    isTotpEnabled: boolean
    image: string | null
    manualInfo: {
        secret: string | null,
        accountName: string | null
    }
    loading: boolean
    error: string | null
}


export interface IModalStates {
    isOpen: boolean
}