import { LinkCard } from "./app/components/link-card";
import { SocialIcons } from "./app/components/social-icons";
import logo from "./assets/logo.jpg";

export default function App() {
  const links = [
    {
      id: 1,
      title: "Info Pricelist",
      url: "https://wa.link/806lds",
      description: "Booking studio disini.",
      status: true,
    },
    {
      id: 2,
      title: "Bridestory by Bya",
      url: "https://wa.link/1eazsm",
      description: "Bya siap membantu kamu terkait Wedding & Prewedding photoshoot.",
      status: true,
    },
    {
      id: 3,
      title: "Studio #1: DIBEAU Paradise Studio",
      url: "https://maps.app.goo.gl/f8jKr7WMt4jitXtZ7",
      description: "Jl. Raya Tanjung Pesona, Rambak, Sungailiat, Bangka, 33215.",
      status: true,
    },
    {
      id: 4,
      title: "Studio #2: Emilyfleur 3rd Floor",
      url: "https://maps.app.goo.gl/8bdruoBns9YSL1LF8",
      description:
        "Jl. Depati Hamzah, Semabung Lama, Bukit Intan, Pangkal Pinang, Bangka, 33147.",
      status: false,
    },
    {
      id: 5,
      title: "Studio #3: Bibi_Enbi Official Studio Photography",
      url: "https://maps.app.goo.gl/K7kSMn7EW7g8tyBs8",
      description: "Jl. Srimenanti III, Sri Menanti, Sungailiat, Bangka, 33214.",
      status: false,
    },
  ];

  const socialLinks = {
    instagram: "https://instagram.com/dibeauphoto",
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-white to-red-50 
                    dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800
                    py-12 px-4 text-gray-900 dark:text-gray-100">
      <div className="max-w-2xl mx-auto">
        {/* Profile */}
        <div className="text-center mb-8">
          <img
            src={logo}
            className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg"
          />
          <h1 className="mb-2 text-2xl font-semibold">
            DIBEAU Photography
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Professional Photographer Based in Bangka Belitung
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4 mb-8">
          {links.map((link) => (
            <LinkCard
              key={link.id}
              title={link.title}
              description={link.description}
              url={link.url}
              disabled={!link.status}
            />
          ))}
        </div>

        {/* Social */}
        <SocialIcons links={socialLinks} />

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p>
            © 2017 - {new Date().getFullYear()} DIBEAU Photo by Vercel. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
