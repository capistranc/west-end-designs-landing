import { IconButton, ButtonGroup, ButtonGroupProps } from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import NextLink from "next/link";

export enum SocialMedia {
  github,
  linkedin,
  instagram,
  facebook,
  twitter,
  tiktok,
}

const SocialMediaLink = ({ socialMediaType, href, ...props }) => {
  const icons = {
    github: { label: "Github", icon: (props) => <FaGithub {...props} /> },
    linkedin: { label: "LinkedIn", icon: (props) => <FaLinkedin {...props} /> },
    instagram: {
      label: "Instagram",
      icon: (props) => <FaInstagram {...props} />,
    },
    facebook: { label: "Facebook", icon: (props) => <FaGithub {...props} /> },
    twitter: { label: "Twitter", icon: (props) => <FaTwitter {...props} /> },
  };

  return (
    <NextLink href={href} passHref>
      <IconButton
        as="a"
        href="#"
        aria-label={icons[socialMediaType].label}
        icon={icons[socialMediaType].icon(props)}
      />
    </NextLink>
  );
};

export const SocialMediaLinks = (props: ButtonGroupProps) => {
  const socialLinks = [{ name: "github", href: "https://linkedin.com/" }];

  socialLinks.map((item) => {
    return SocialMediaLink({ socialMediaType: item.name, href: item.href });
  });

  return (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
      <NextLink href="https://linkedin.com/" passHref>
        <IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
          icon={<FaLinkedin size="20px" />}
        />
      </NextLink>
      <NextLink href="https://github.com/" passHref>
        <IconButton
          as="a"
          href="#"
          aria-label="GitHub"
          icon={<FaGithub fontSize="20px" />}
        />
      </NextLink>
      <NextLink href="https://twitter.com" passHref>
        <IconButton
          as="a"
          href="#"
          aria-label="Twitter"
          icon={<FaTwitter fontSize="20px" />}
        />
      </NextLink>
    </ButtonGroup>
  );
};
