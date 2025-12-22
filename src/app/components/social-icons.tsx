import { Instagram } from "lucide-react";

interface SocialIconsProps {
  links: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
    discord?: string;
    youtube?: string;
  };
}

export function SocialIcons({ links }: SocialIconsProps) {
  const socialPlatforms = [
    { name: "instagram", icon: Instagram, url: links.instagram },
  ];

  return (
    <div className="flex justify-center gap-4">
      {socialPlatforms.map(
        (platform) =>
          platform.url && (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 border border-pink-100 hover:border-pink-200 hover:-translate-y-1 group"
              aria-label={platform.name}
            >
              <platform.icon className="w-5 h-5 text-gray-600 group-hover:text-pink-600 transition-colors" />
            </a>
          )
      )}
    </div>
  );
}