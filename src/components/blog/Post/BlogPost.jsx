"use client"
import { useEffect, useRef } from 'react'
import hljs from "highlight.js"
import 'highlight.js/styles/monokai-sublime.css'

function BlogPost({ data }) {

    const postRef = useRef(null)
    useEffect(() => {
        if (postRef.current) {
            const codeBlocks = postRef.current.querySelectorAll('pre')
            codeBlocks.forEach(codeBlock => {
                hljs.highlightBlock(codeBlock)
            })
        }
    }, [postRef])

    return (
        <div ref={postRef} dangerouslySetInnerHTML={{ __html: data }} />
    )
}

export default BlogPost