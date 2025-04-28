interface HeroButtonProps {
    text: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
    fontWieght: string;
    href?: string;
}

export default function Hero_button({ text, bgColor, borderColor, textColor, fontWieght, href }: HeroButtonProps) {
    if (href) {
        const isExternalLink = href.startsWith('http');
        return (
            <a 
                href={href} 
                target={isExternalLink ? "_blank" : undefined}
                rel={isExternalLink ? "noopener noreferrer" : undefined}
                className={`px-4 py-2 border rounded-md ${bgColor} ${borderColor} ${textColor} ${fontWieght}`}
            >
                {text}
            </a>
        );
    }

    return (
        <button className={`px-4 py-2 border rounded-md ${bgColor} ${borderColor} ${textColor} ${fontWieght}`}>
            {text}
        </button>
    );
}
  