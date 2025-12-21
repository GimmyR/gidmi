import useClipboard from "@/hooks/useClipboard";

export default function ClipboardIconButton({ 
    
    code, className 

} : { 
    
    code: string, className: string 

}) {
    const { isCopied, copyToClipboard } = useClipboard();

    return (
        <button className={className} onClick={() => copyToClipboard(JSON.parse(code))}>
            <i className={ `bi ${ isCopied ? 'bi-clipboard-check' : 'bi-clipboard' }` }></i>
        </button>
    );
}