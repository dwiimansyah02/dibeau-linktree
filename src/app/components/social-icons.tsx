import { Flame, Instagram, Youtube } from "lucide-react";

interface SocialIconsProps {
  links: {
    instagram?: string;
    tiktok?: string;
    youtube?: string;
  };
}

export function SocialIcons({ links }: SocialIconsProps) {
  const socialPlatforms = [
    {
      name: "instagram",
      icon: Instagram,
      url: links.instagram,
      color: {
        border: "pink-100",
        hoverBorder: "pink-200",
        darkHoverBorder: "pink-400",
        groupHoverText: "pink-600",
        darkGroupHoverText: "pink-400"
      },
    },
    {
      name: "youtube",
      icon: Youtube,
      url: links.youtube,
      color: {
        border: "red-100",
        hoverBorder: "red-200",
        darkHoverBorder: "red-400",
        groupHoverText: "red-600",
        darkGroupHoverText: "red-400"
      },
    },
    {
      name: "tiktok",
      icon: Flame,
      url: links.tiktok,
      color: {
        border: "gray-100",
        hoverBorder: "gray-200",
        darkHoverBorder: "gray-400",
        groupHoverText: "gray-600",
        darkGroupHoverText: "gray-400"
      },
    },
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
              className={`
                w-12 h-12 rounded-full flex items-center justify-center
                transition-all duration-200 border
                bg-white border-${platform.color.border} shadow-sm
                hover:shadow-md hover:border-${platform.color.hoverBorder} hover:-translate-y-1
                dark:bg-neutral-900 dark:border-neutral-800
                dark:hover:border-${platform.color.darkHoverBorder}
                group
              `}
            >
              <platform.icon
                className={`
                  w-5 h-5 transition-colors
                  text-gray-600 group-hover:text-${platform.color.groupHoverText}
                  dark:text-gray-400 dark:group-hover:text-${platform.color.darkGroupHoverText}
                `}
              />
            </a>
          )
      )}
    </div>
  );
}
