import { IconButton, ButtonGroup, ButtonGroupProps } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import NextLink from "next/link";

export interface SocialMedia {
  github?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  tiktok?: string;
}

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <NextLink href="https://linkedin.com/" passHref>
      <IconButton
        as="a"
        href="#"
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="20px" />}
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
