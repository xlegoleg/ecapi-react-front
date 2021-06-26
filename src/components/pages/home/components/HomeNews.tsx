import React from "react"
import { Typography, Card, CardContent, CardMedia, CardActions, Grid } from "@material-ui/core"
import { useStyles } from "@styles/pages/home/HomeNewsStyle"

const mock = [
    {
        background: 'red',
        title: 'First title',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veritatis a nisi quos tempora vitae dicta? Deleniti, neque! Voluptates officia impedit, aperiam minus, repudiandae laborum, adipisci illum consectetur omnis quisquam ea nihil ab qui unde enim alias nemo deleniti quos culpa cupiditate hic. Repudiandae ratione amet odit sunt sint? Ad possimus, libero maiores quos dolorem a, dolorum nobis dolore beatae, sunt inventore cum tempore sint impedit quas. Non unde repellendus hic, fugiat tenetur aut sed id minima, quisquam aspernatur fugit doloremque! Vero sapiente ipsum, aperiam laboriosam eius nobis. Soluta, pariatur debitis tenetur velit ipsam at dolor sunt temporibus quae quam'
    },
    {
        background: 'blue',
        title: 'Second very looooooonger title lalala tralala',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veritatis a nisi quos tempora vitae dicta? Deleniti, neque! Voluptates officia impedit, aperiam minus, repudiandae laborum, adipisci illum consectetur omnis quisquam ea nihil ab qui unde enim alias nemo deleniti quos culpa cupiditate hic. Repudiandae ratione amet odit sunt sint? Ad possimus, libero maiores quos dolorem a, dolorum nobis dolore beatae, sunt inventore cum tempore sint impedit quas. Non unde repellendus hic, fugiat tenetur aut sed id minima, quisquam aspernatur fugit doloremque! Vero sapiente ipsum, aperiam laboriosam eius nobis. Soluta, pariatur debitis tenetur velit ipsam at dolor sunt temporibus quae quam'
    },
    {
        background: 'green',
        title: 'Third title lalala lool',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veritatis a nisi quos tempora vitae dicta? Deleniti, neque! Voluptates officia impedit, aperiam minus, repudiandae laborum, adipisci illum consectetur omnis quisquam ea nihil ab qui unde enim alias nemo deleniti quos culpa cupiditate hic. Repudiandae ratione amet odit sunt sint? Ad possimus, libero maiores quos dolorem a, dolorum nobis dolore beatae, sunt inventore cum tempore sint impedit quas. Non unde repellendus hic, fugiat tenetur aut sed id minima, quisquam aspernatur fugit doloremque! Vero sapiente ipsum, aperiam laboriosam eius nobis. Soluta, pariatur debitis tenetur velit ipsam at dolor sunt temporibus quae quam'
    }
]

export const HomeNews: React.FC = (props: any) => {
    const classes = useStyles();

    return <Card style={{borderRadius: '0px'}}>
        <div className={classes.titleContainer}>
            <Typography className={classes.title} variant="h3">
                Latest news
            </Typography>
        </div>
        <CardContent>
            <Grid container spacing={2}>
                {
                    mock.map((item, index) => {
                        return <Grid key={`home-news-${index}`} item xs={12} md={6}>
                            <Card>
                                <CardMedia
                                    component="div"
                                    style={{backgroundColor: item.background, height: '140px', width: '100$'}}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.title}
                                    </Typography>
                                    <Typography style={{height: '140px', overflow: 'hidden', textOverflow: 'ellipsis'}} variant="body2" color="textSecondary" component="p">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    })
                }
            </Grid>
        </CardContent>
    </Card>
}