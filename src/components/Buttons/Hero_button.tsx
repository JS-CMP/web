interface ButtonProps {
    text: string;
    bgColor: string;
    borderColor?: string;
    textColor?: string;
    fontWieght?: string;
  }
  
  const Hero_button: React.FC<ButtonProps> = ({ text, bgColor, borderColor, textColor, fontWieght }) => {
    return (
      <div className="flex">
        <button className={`px-4 py-2 border rounded-md ${bgColor} ${borderColor} ${textColor} ${fontWieght}`}>
          {text}
        </button>
      </div>

    );
  };
  
export default Hero_button;
  