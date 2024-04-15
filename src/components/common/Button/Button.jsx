import "./Button.css";

export default function Button({
  buttonText,
  buttonType = "primary",
  buttonLink,
}) {
  return (
    <div className="button-wrap">
      <button className={`btn ${buttonType}`}>
        <a href={buttonLink}>{buttonText} </a>
      </button>
    </div>
  );
}
