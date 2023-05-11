'use client';

import { useRouter } from 'next/navigation';
import { MouseEvent, ReactNode, useCallback, useEffect, useRef } from 'react';

export default function Modal({ children }: { children: ReactNode }) {
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper]
    );

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onDismiss();
        },
        [onDismiss]
    );

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [onKeyDown]);

    return (
        <div
            ref={overlay}
            className="fixed left-0 right-0 top-0 bottom-0 z-50 mx-auto flex items-center justify-center bg-black/60"
            onClick={onClick}
        >
            <div
                ref={wrapper}
                className="w-full max-w-2xl rounded-md bg-white p-6 shadow-lg"
            >
                {children}
            </div>
        </div>
    );
}