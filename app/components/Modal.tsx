"use client";

import { KeyboardEvent, MouseEvent, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

const Modal = ({ children }: { children: ReactNode }) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
            dialogRef.current?.scrollTo({
                top: 0
            });
        }
    }, []);

    const onModalClose = () => {
        router.back();
    };

    const onModalEscape = (e: KeyboardEvent<HTMLDialogElement>) => {
        if (e.key === "Escape") {
            onModalClose();
        }
    };

    const onClickModal = (e: MouseEvent<HTMLDialogElement>) => {
        if ((e.target as HTMLElement).nodeName === "DIALOG") {
            onModalClose();
        }
    };

    return createPortal(
        <dialog
            className="w-full max-w-2xl  mx-auto p-6 rounded-lg shadow-xl bg-white dark:bg-gray-800 backdrop:bg-black/50 backdrop:backdrop-blur-sm"
            onClick={onClickModal}
            onClose={onModalClose}
            onKeyDown={onModalEscape}
            ref={dialogRef}
        >
            {children}
        </dialog>,
        document.getElementById("modal-root") as HTMLElement
    );
};

export default Modal;
