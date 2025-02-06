import Loading from "./Loading";

interface SharedButtonProps {
  text: string;
  classes: string;
  isLoading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const SharedButton: React.FC<SharedButtonProps> = ({
  classes,
  text,
  isLoading = false,
  onClick,
  type = "button",
}) => {
  return (
    <div>
      <button
        className={`${classes} py-4 px-6 ${
          isLoading ? "bg-primary py-0" : "bg-primary hover:bg-primary/95"
        } transition-all duration-300 text-white uppercase text-base font-bold leading-[25px] rounded-full`}
        disabled={isLoading}
        onClick={onClick}
        type={type}
      >
        {isLoading ? <Loading /> : text}
      </button>
    </div>
  );
};

export default SharedButton;
