import { styled, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Image = styled(Box)`
  width: 100%;
  position: relative;
  height: 350px;
  margin: 0;
  background: url(http://csmthemes.com/themes/camra/v1c/img/bg-t.jpg) 50% 50% /
    contain no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #ffffff;
  margin-left: auto;
  margin-top: auto;
  font-family: cursive;
`;

const Banner = () => {
  const theme = useTheme();
  return (
    <Image>
      <Heading sx={{ [theme.breakpoints.down("sm")]: { marginLeft: 0 } }}>
        BLOG
      </Heading>
    </Image>
  );
};

export default Banner;
