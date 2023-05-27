
import Typed from "typed.js"
import React from 'react';

export function TypingAnimation(): JSX.Element {

    const elementRef = React.useRef(null);
    const typedRef = React.useRef<Typed & { destroy: () => void } | null>(null);

    React.useEffect(() => {
        const options = {
            strings: [
                "This is a^500 <strong>Lexical Rich Text Editor</strong>^1000\nBuild with Nextjs 13"
            ],
            typeSpeed: 50,
            backSpeed: 50,
            cursorChar: "_"
        }

        typedRef.current = new Typed(elementRef.current, options)
        return () => {
            typedRef.current?.destroy();
        }
    }, [])

    return (
        <div className="pt-5 h-38">
            <span className="whitespace-pre" ref={elementRef} />
        </div>
    )
}