import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <PixelDensityResponsiveImage src={src} alt={alt} />
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const PixelDensityResponsiveImage = ({ src, alt }) => {
  const srcWithoutExtension = src.split(".")[0];

  const avifSrcSet = `
    ${srcWithoutExtension}.avif 1x,
    ${srcWithoutExtension}@2x.avif 2x,
    ${srcWithoutExtension}@3x.avif 3x,
  `;

  const jpegSrcSet = `
    ${srcWithoutExtension}.jpg 1x,
    ${srcWithoutExtension}@2x.jpg 2x,
    ${srcWithoutExtension}@3x.jpg 3x,
  `;

  return (
    <Picture>
      <source type="image/avif" srcSet={avifSrcSet} />
      <source type="image/jpeg" srcSet={jpegSrcSet} />
      <img src={src} alt={alt} />
    </Picture>
  );
};

const Picture = styled.picture`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
