//import from '@mui/material/'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const cards = [
	{
		id: 1,
		heading: "Class Components",
		description: "As the legend goes... way back before February 2019, in order for ancient React developers to modularize their code they had to use Class-based Components...",
		viewUrl: "class-components",
		sourceUrl: ""
	},
	{
		id: 2,
		heading: "",
		description: "",
		viewUrl: "",
		sourceUrl: ""
	}
];


export default function HomeCards() {
	return (
		<Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', paddingTop: 0 }}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href={card.viewUrl} size="small">View</Button>
                    <Button size="small">{card.sourceUrl}</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
	);
}