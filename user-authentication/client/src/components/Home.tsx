import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { Bet, createBet, getBets, getFormData, User, View } from "../core";

interface Props {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setView: React.Dispatch<React.SetStateAction<View>>;
}

export function Home(props: Props) {
  const [bets, setBets] = useState<Bet[]>([]);

  useEffect(() => {
    getBets().then((bets) => setBets(bets || []));
  }, []);

  async function logout() {
    await Auth.signOut();
    props.setUser(null);
    props.setView(View.Landing);
  }

  return (
    <>
      <p>Welcome back, {props.user?.firstName}</p>
      <form
        style={{ marginBottom: "20px" }}
        onSubmit={async (e) => {
          e.preventDefault();
          const data = getFormData(e.target);
          console.log(data);
          const newBet = await createBet({
            amount: data.amount,
            win: Math.random() > 0.5,
          });
          setBets((bets) => [newBet, ...bets]);
        }}
      >
        <div>
          <label htmlFor="amount">$</label>
          <input id="amount" name="amount" type="number" />
        </div>
        <button type="submit">Place bet</button>
      </form>
      <table style={{ marginBottom: "20px" }}>
        <tr>
          <th>Amount</th>
          <th>Result</th>
        </tr>
        {bets.slice(0, 5).map((bet) => (
          <tr>
            <td>${bet.amount}</td>
            <td>{bet.win ? "winner" : "loser"}</td>
          </tr>
        ))}
      </table>
      <div className="action-tray">
        <button onClick={() => logout()}>Log out</button>
      </div>
    </>
  );
}
