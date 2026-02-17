export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-4 mt-8">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
