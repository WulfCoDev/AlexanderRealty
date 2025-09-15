import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        Alexander Realty
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/listings" className="hover:text-blue-500">Listings</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
      </div>
    </nav>
  );
}
