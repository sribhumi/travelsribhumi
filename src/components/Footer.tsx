import { Facebook, Instagram, Building2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://facebook.com/travelsribhumi',
      label: 'Facebook',
      color: '#1877f2'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/travelsribhumi',
      label: 'Instagram',
      color: '#e4405f'
    },
    {
      icon: Building2,
      href: 'https://business.google.com/add/travelsribhumi',
      label: 'Google Business',
      color: '#4285f4'
    }
  ];
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-8">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
                aria-label={label}
                style={{ color }}
              >
                <Icon size={28} strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <div className="text-center space-y-2">
            <p className="text-gray-400">Follow us on social media for updates and special offers</p>
            <p className="text-sm">&copy; {currentYear} Travel SriBhumi. Akash Nath & Kamlesh Debnath All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
