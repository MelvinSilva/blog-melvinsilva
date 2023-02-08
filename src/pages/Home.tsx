import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import LittleCard from '../components/LittleCard';
import Welcome from '../components/Welcome';
import { database } from '../components/firebase'

interface Article {
    title: string;
    description: string;
    img: string;
    slug: string;
    content: string;
}

function Home() {

    const [blogs, setBlogs] = useState<Array<Article>>([])

    async function getBlogs() {
        let blogs: Array<Article> = await database.ref('blogs').once('value').then(function (snapshot) {
            return snapshot.val()
        })
        setBlogs(blogs)
    }

    useEffect(() => {
        getBlogs();
    }, []);


    return (
        <div>
            <Welcome />
            <Grid
                container
                spacing={1}
                direction="row"
                alignItems="center"
                justifyContent="center">
                {Object.keys(blogs).length > 0 && Object.keys(blogs).map((key: any) =>
                    <Grid key={key} item xs={12} md={4}>
                        <LittleCard
                            title={blogs[key].title}
                            description={blogs[key].description}
                            img={blogs[key].img}
                            slug={blogs[key].slug} />
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

export default Home;