import { View } from "../core";

interface Props {
  setView: React.Dispatch<React.SetStateAction<View>>;
}

export function Landing(props: Props) {
  return (
    <>
      <p>Now available in Ohio!</p>
      <div className="action-tray">
        <button onClick={() => props.setView(View.Signup)}>Sign Up</button>
        <button onClick={() => props.setView(View.Login)}>Log In</button>
      </div>
    </>
  );
}
