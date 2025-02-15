import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import dashboard from '../dashboard.jpg'
const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Real-time inventory tracking',
    description:
      'Real-time view of inventory levels. This feature allows businesses to monitor and adjust inventory accordingly, reducing the risk of stockouts or overstocking.',
    imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'Automated inventory alerts',
    description:
      'Automated inventory alerts that notify users when inventory levels reach a predetermined threshold. This feature helps businesses to maintain optimal inventory levels and avoid stockouts.',
    imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Integration with e-commerce platforms and other systemss',
    description:
      'Integrate with e-commerce platforms, point-of-sale systems, and other business systems such as accounting software. This feature allows businesses to automate inventory processes, reducing manual data entry and errors.',
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
];

export default function Features() {



  return (
    <Box id="features"
      sx={{
        py: { xs: 8, },
        height: '100vh',
        backgroundColor:'#F0F4F8',
        display:'flex',
        justifyContent:'center',

      }}>
      <Grid container spacing={6} maxWidth="lg" >


        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%', alignItems:'center' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '80%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',        
            }}
          >
            <Box
              sx={{
                m: 'auto',
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                baclgroundPosition:'center',
                backgroundImage: `url(${dashboard})`,
                backgroundRepeat:'no-repeat'
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} sx={{ marginTop:'20px'}}>
          <div>
            <Typography component="h2" variant="h4" color="#242424">
              Product features
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 }, lineHeight: '25px', letterSpacing: '0.05em' }}
            >
              {/* Here you can provide a brief overview of the key features of the
              product. For example, you could list the number of features, the types
              of features, add-ons, or the benefits of the features. */}
            </Typography>
          </div>
          <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                sx={{
                  borderColor: 'primary.light',
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              sx={{

                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 280,
              }}
            />

          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                // onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  // backgroundColor:
                  //   selectedItemIndex === index ? 'action.selected' : undefined,
                  // borderColor: (theme) => {
                  //   if (theme.palette.mode === 'light') {
                  //     return selectedItemIndex === index
                  //       ? 'primary.light'
                  //       : 'grey.200';
                  //   }
                  //   return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                  // },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      // color: (theme) => {
                      //   if (theme.palette.mode === 'light') {
                      //     return selectedItemIndex === index
                      //       ? 'primary.main'
                      //       : 'grey.300';
                      //   }
                      //   return selectedItemIndex === index
                      //     ? 'primary.main'
                      //     : 'grey.700';
                      // },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: 'none' }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        '& > svg': { transition: '0.2s' },
                        '&:hover > svg': { transform: 'translateX(2px)' },
                      }}
                      // onClick={(event) => {
                      //   event.stopPropagation();
                      // }}
                    >
                      {/* <span>Learn more</span> */}
                      {/* <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: '1px', ml: '2px' }}
                      /> */}
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>

      </Grid>
    </Box>
  );
}