"use client"
import { useEffect } from 'react'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import BlotFormatter from 'quill-blot-formatter'
import hljs from "highlight.js"
import 'highlight.js/styles/monokai-sublime.css'

function Editor({ post, setFieldValue, setFieldTouched }) {

    const modules = {
        syntax: {
            highlight: text => hljs.highlightAuto(text).value
        },
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['code-block'],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            [{ size: ['small', false, 'large', 'huge'] }],
        ],
        clipboard: {
            matchVisual: false,
        },
        blotFormatter: {}
    }
    const formats = [
        'bold', 'italic', 'underline', 'strike', 'code-block',
        'color', 'background',
        'align', 'list',
        'link', 'image', 'video',
        'size',
    ]
    const placeholder = 'Blog yazısı giriniz..'

    const { quill, quillRef, Quill } = useQuill({ modules, formats, placeholder });

    if (Quill && !quill) {
        Quill.register('modules/blotFormatter', BlotFormatter)
    }

    useEffect(() => {
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML(post)
            quill.on('text-change', () => {
                setFieldValue('post', quill.root.innerHTML)
                setFieldValue('text', quill.getText())
            })
        }
    }, [quill])

    return (
        <div>
            <div ref={quillRef} style={{ width: '100%', height: '300px' }} onBlur={() => setFieldTouched('post', true)} />
        </div>
    );
}

export default Editor