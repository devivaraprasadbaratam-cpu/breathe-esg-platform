import {
  Link,
  useNavigate,
} from "react-router-dom";

export default function Layout({
  children,
}: any) {
    const navigate = useNavigate();

const handleLogout = () => {

  localStorage.removeItem(
    "isAuthenticated"
  );

  navigate("/login");

};

  return (

    <div className="flex min-h-screen bg-gray-100">

      <div className="w-72 bg-black text-white p-8">

        <h1 className="text-5xl font-bold mb-14">

          Breathe ESG

        </h1>

        <nav className="space-y-8 text-2xl">

          <Link
            to="/"
            className="block"
          >

            Dashboard

          </Link>

          <Link
            to="/upload"
            className="block"
          >

            Upload Data

          </Link>

          <Link
            to="/records"
            className="block"
          >

            Emission Records

          </Link>

          <Link
            to="/audit"
            className="block"
          >

            Audit Logs

          </Link>

        </nav>
        <button
  onClick={handleLogout}
  className="mt-16 bg-red-500 px-6 py-3 rounded-xl text-xl"
>

  Logout

</button>

      </div>

      <div className="flex-1 p-8">

        {children}

      </div>

    </div>
  );
}