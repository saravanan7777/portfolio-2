"use client";

import { Column, Flex, Heading, SmartImage, SmartLink, Tag, Text, RevealFx } from "@/once-ui/components";
import styles from "./Posts.module.scss";
import { formatDate } from "@/app/utils/formatDate";

interface PostProps {
  post: any;
  thumbnail: boolean;
}

export default function Post({ post, thumbnail }: PostProps) {
  const tags = post.metadata.tag.split(",").map((tag: string) => tag.trim());
  return (
     <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
    <SmartLink
      fillWidth
      className={styles.hover}
      unstyled
      key={post.slug}
      href={`${post.metadata.link}`}
    >
      <Flex
        position="relative"
        mobileDirection="column"
        fillWidth
        paddingY="12"
        paddingX="16"
        gap="32"
      >
        {post.metadata.image && thumbnail && (
          <SmartImage
            priority
            maxWidth={20}
            className={styles.image}
            sizes="640px"
            border="neutral-alpha-weak"
            cursor="interactive"
            radius="m"
            src={post.metadata.image}
            alt={"Thumbnail of " + post.metadata.title}
            aspectRatio="16 / 9"
          />
        )}
        <Column position="relative" fillWidth gap="8" vertical="center">
          <Heading as="h1" variant="heading-strong-l" wrap="balance">
            {post.metadata.title}
          </Heading>
          
          
         
          {tags.length > 0 && (
            <Flex gap="8">
              {tags.map((tag: string, index: number) =>
                index < 3 ? <Tag key={index} label={tag} variant="neutral" /> : null
              )}
            </Flex>
          )}
        </Column>
      </Flex>
    </SmartLink>
    </RevealFx>
  );
}
