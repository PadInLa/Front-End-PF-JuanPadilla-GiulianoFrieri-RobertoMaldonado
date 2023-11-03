import { Box, BoxProps } from "@mui/material";

type ImgProps = {
  alt?: string;
  src: string;
  // add more HTML img attributes you need
};

const Image = (props: BoxProps & ImgProps) => (
  <Box component="img" {...props} />
);

export default Image;
