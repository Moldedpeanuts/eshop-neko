export default function Input(children, type = "text", placeholder, name, value, onChange  ) {
    return(
        <>
            <input>{children}</input>
        </>
    );
}