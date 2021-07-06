import "./Button.css";

export default function Button(props) {
    return (
        <div className="button-container">
            <button onClick={props.changeOnClick}>
                <span className="text">next</span>
            </button>
        </div>
    );
}
