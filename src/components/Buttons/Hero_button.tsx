interface ButtonProps {
    text: string;
    bgColor: string;
    borderColor?: string;
    textColor?: string;
    fontWieght?: string;
    href?: string;
  }
  
  const Hero_button: React.FC<ButtonProps> = ({ text, bgColor, borderColor, textColor, fontWieght, href }) => {
    return (
      <div className="flex">
        <a href={href} className={`px-4 py-2 border rounded-md ${bgColor} ${borderColor} ${textColor} ${fontWieght}`}>
          {text}
        </a>
      </div>

    );
  };
  
export default Hero_button;
  