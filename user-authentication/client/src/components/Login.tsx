import { Auth } from "aws-amplify";
import { createUser, getFormData, getUser, User, View } from "../core";

interface Props {
  setView: React.Dispatch<React.SetStateAction<View>>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export function Login(props: Props) {
  return (
    <form
      onSubmit={async (e) => {
        try {
          e.preventDefault();
          const data = getFormData(e.target);
          console.log(data);

          // AWS Cognito
          const user = await Auth.signIn(data.email, data.password);
          console.log(user);
          console.log(user.attributes);
          console.log(user.attributes.given_name);

          // Database: get or create
          let dbUser = await getUser();
          if (!dbUser) {
            dbUser = await createUser({
              firstName: user.attributes.given_name,
              lastName: user.attributes.family_name,
              email: user.attributes.email,
            });
          }
          console.log(dbUser);

          props.setUser(dbUser);
          props.setView(View.Home);
        } catch (error) {
          alert(error);
        }
      }}
    >
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
}
