"use client"
import { createContext, createElement, useState, useContext, useRef, useEffect, Fragment } from 'react'

const PopoverContext = createContext()

export default function Popover({ as = Fragment, children, ...props }) {
    const buttonRef = useRef()
    const [open, setOpen] = useState(false)
    const button = children.find(component => component.type === Popover.Button)
    const panel = children.find(component => component.type === Popover.Panel)

    const values = {
        buttonRef,
        open,
        toggle: () => setOpen(prev => !prev),
        close: () => setOpen(false)
    }

    return createElement(as, props, (
        <PopoverContext.Provider value={values}>
            {button}
            {panel}
        </PopoverContext.Provider>
    ))
}

function Button({ as = "button", children, ...props }) {
    const { toggle, buttonRef } = useContext(PopoverContext)
    return (
        createElement(as, {
            ref: buttonRef,
            onClick: () => toggle(),
            ...props
        }, children)
    )
}

function Panel({ as = "nav", children, from, to, ...props }) {
    const { buttonRef, open, close } = useContext(PopoverContext)
    const panelRef = useRef()
    const defaultStyles = {transition: "all 300ms ease-in-out"}
    
    useEffect(() => {
        const clickHandle = e => {
            if (!e.composedPath().includes(panelRef.current) &&
                !e.composedPath().includes(buttonRef.current)) {
                close()
            }
        }

        document.addEventListener('click', clickHandle)
        return () => document.removeEventListener('click', clickHandle)
    }, [])

    return (
        createElement(as, {
            ref: panelRef,
            style: 
                !open ?
                {
                    ...defaultStyles,
                    ...to
                }
                :
                {
                    ...defaultStyles,
                    ...from
                },
            ...props
        },
            typeof children === "function" ? children({ close, open }) : children)
    )
}

Popover.Button = Button
Popover.Panel = Panel

