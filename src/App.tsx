import { LinkCard } from "./app/components/link-card";
import { SocialIcons } from "./app/components/social-icons";
import logo from "./assets/logo.jpg";

export default function App() {
  const links = [
    {
      id: 1,
      title: "Info Pricelist",
      url: "https://api.whatsapp.com/send?phone=6282181225665&text=Halo+Bya%2C+boleh+minta+informasi+terkait+pricelist+photoshoot%3F&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnQJ6daMXUQp3_RqIxEb0jyyHxsS8aXc83NkIUeO7b9QBLO3WahWOk50q2AY4_aem_630P_OBe8JVyskZS_-27PA",
      description: "Bya akan segera menginformasikan pricelist photoshoot ke kamu."
    },
    {
      id: 2,
      title: "Testimoni",
      url: "",
      description: "Apa kata klien."
    },
    {
      id: 3,
      title: "Official Website",
      url: "",
      description: "Web resmi milik DIBEAU Photography."
    },
  ];

  const socialLinks = {
    instagram: "https://instagram.com/dibeauphoto",
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-white to-red-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <img src={logo} className="w-24 h-24 bg-linear-to-br rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl shadow-lg" />
          <h1 className="mb-2">DIBEAU Photography</h1>
          <p className="text-gray-600 max-w-md mx-auto">
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
            />
          ))}
        </div>

        {/* Social Icons */}
        <SocialIcons links={socialLinks} />

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>© 2017 - {new Date().getFullYear()} DIBEAU Photo by Vercel. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}