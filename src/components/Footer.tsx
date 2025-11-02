const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-white/80 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Vishal Kumar Sarvade — Data Architect. Built with{" "}
            <a
              href="https://lovable.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 transition-smooth font-medium"
            >
              Lovable
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
