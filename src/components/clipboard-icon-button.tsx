import useClipboard from "@/hooks/useClipboard";
import Link from "next/link";

export default function ClipboardIconButton({ 
    
    code, className 

} : { 
    
    code: string, className: string 

}) {
    const { isCopied, copyToClipboard } = useClipboard();

    return (
        <Link href="#" className={className} onClick={() => copyToClipboard(code)}>
            <i className={ `bi ${ isCopied ? 'bi-clipboard-check' : 'bi-clipboard' }` }></i>
        </Link>
    );
}