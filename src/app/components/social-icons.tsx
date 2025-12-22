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
              rel="noopener noreferrer"
              aria-label={platform.name}
              className="
                w-12 h-12 rounded-full flex items-center justify-center
                transition-all duration-200 border
                bg-white border-pink-100 shadow-sm
                hover:shadow-md hover:border-pink-200 hover:-translate-y-1
                dark:bg-neutral-900 dark:border-neutral-800
                dark:hover:border-pink-400
                group
              "
            >
              <platform.icon
                className="
                  w-5 h-5 transition-colors
                  text-gray-600 group-hover:text-pink-600
                  dark:text-gray-400 dark:group-hover:text-pink-400
                "
              />
            </a>
          )
      )}
    </div>
  );
}
