export default function Button({children, variant, size, onClick}) {
    const variantClasses = {
        primary: "bg-primary text-white hover:bg-secondary",
        secondary: "bg-secondary text-white hover:bg-secondary",
        outline: "border border-primary text-primary",
        ghost: "text-gray-500 border border-gray-500 hover:border-gray-500",
        danger: "bg-danger text-white",
    };

    const sizeClasses = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    const className = `${variantClasses[variant]} ${sizeClasses[size]}`;

    return(
        <>
            <button className={className} onClick={onClick}>{children}</button>
        </>
    );
}