// components/Footer.tsx

export function Footer() {
  return (
    <footer className="border-t mt-10 py-4 text-center text-sm text-gray-500 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        &copy; {new Date().getFullYear()} SEA Catering. All rights reserved.
      </div>
    </footer>
  );
}
