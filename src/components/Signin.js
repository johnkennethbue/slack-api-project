export default function Signin() {
  return (
    <div className="signin">
      <form className="signin__form">
        <h1 className="signin-heading">Sign in</h1>
        <p className="signin__error">Status</p>
        <div className="input-group">
          <input required type="email" placeholder="Email" autoComplete="off" />
          <input type="password" placeholder="Password" autoComplete="off" />
          <input id="s-btn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
