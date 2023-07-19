import React, { useRef, useEffect } from 'react';

const useFirstLinePadding = (paddingValue) => {
    const elementRef = useRef(null);

    useEffect(() => {
        if (elementRef.current) {
            const lines = elementRef.current.innerText.split('\n');
            const firstLine = lines[0];
            if (firstLine) {
                const firstLineElement = document.createElement('span');
                firstLineElement.style.paddingLeft = paddingValue;
                firstLineElement.textContent = firstLine;
                elementRef.current.innerHTML = '';
                elementRef.current.appendChild(firstLineElement);
                for (let i = 1; i < lines.length; i++) {
                    const lineElement = document.createElement('span');
                    lineElement.textContent = lines[i];
                    elementRef.current.appendChild(lineElement);
                }
            }
        }
    }, [paddingValue]);

    return elementRef;
};

export default useFirstLinePadding;
