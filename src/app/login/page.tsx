import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Login</h1>
      <Link href="/login/google">Signin with Google</Link>
    </div>
  );
}
