export default function ErrorCard({ message }) {
  return (
    <div className="bg-red-500 text-white p-4 rounded mt-6">
      {message}
    </div>
  );
}