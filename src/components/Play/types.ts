
export interface IAnswer {
    documentId: number;
    description: string;
    isValid: boolean;
    isValidated: boolean;
}

export interface IQuestion {
    data: Array<{
        id: number;
        description: string;
        answers: Array<IAnswer>;
    }>;
}

export interface PlayProps {
    mode: string | undefined;
    topic: string | undefined;
    onClose: () => void;
}

export interface PlayDialogProps {
    isOpen: boolean;
    onClose: () => void;
    mode: string;
    topic: string;
}
