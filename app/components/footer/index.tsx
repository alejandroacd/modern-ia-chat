// components/Footer.tsx
export  async function Footer() {
    return (
      <footer className="w-full text-center text-sm text-gray-400 py-6 border-t border-gray-800 mt-10">
        <p>© {`${new Date().getFullYear()} Cosmic AI is developed with love by Ale Contreras <3. Powered by OpenAI.`}</p>
      </footer>
    );
  }
  