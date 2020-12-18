/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, Heading } from "theme-ui";
import Image from "next/image";

const InstagramWidget = ({ instaPosts }) => {
  return (
    <div sx={{ textAlign: "center" }}>
      <Heading
        sx={{
          transform: "translate(0, 10rem)",
          fontWeight: "300",
          letterSpacing: "2px",
        }}
      >
        Follow us @lennonjaneco
      </Heading>
      <div sx={{ variant: "containers.instagramWidget" }}>
        {instaPosts.map((post) => {
          return (
            <a
              href="https://instagram.com/lennonjaneco"
              key={post.id}
              sx={{ p: 0, m: 10 }}
            >
              <Image
                src={post.media_url}
                alt="instagram feed"
                width={800}
                height={800}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default InstagramWidget;