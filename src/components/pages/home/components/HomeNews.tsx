import React, { useEffect, useState } from "react"
import { Typography, Card, CardContent, CardMedia, CardActions, Grid, Box, Button } from "@material-ui/core"
import { useStyles } from "@styles/pages/home/HomeNewsStyle"
import postsService from '@services/blog/postsService';
import { IPostEntity } from "@/interfaces/services/blog/posts";

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
    const [news, setNews] = useState<Array<IPostEntity>>([]);

    useEffect(() => {
        postsService.getNews().then((news) => {
            setNews(news);
        });
    }, [])

    return <Card style={{borderRadius: '0px', boxShadow: 'none', overflow:'visible'}}>
        <div className={classes.titleContainer}>
            <Typography className={classes.title} variant="h3">
                Latest news
            </Typography>
        </div>
        <CardContent style={{paddingLeft: '0', paddingRight: '0'}}>
            <Grid container spacing={2}>
                {
                    news.map((item, index) => {
                        return <Grid key={`home-news-${index}`} item xs={12} sm={6} md={4}>
                            <Card className={classes.newsCard}>
                                <CardMedia
                                    component="div"
                                    style={{backgroundImage: `url("${item.image}")`, height: '200px', width: '100%'}}
                                />
                                <CardContent>
                                    <Typography className={classes.newsTitle} gutterBottom variant="h5" component="h2">
                                        {item.title}
                                    </Typography>
                                    <Typography className={classes.newsDescription} variant="body2" color="textSecondary" component="p">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.newsCardActions}>
                                    <Box display="flex" marginLeft="auto" component="div">
                                        <Button variant="contained" color="secondary">read more</Button>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>
                    })
                }
            </Grid>
        </CardContent>
    </Card>
}