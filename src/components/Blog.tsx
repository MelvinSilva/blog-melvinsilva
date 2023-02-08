import { useEffect, useState } from 'react';
import BigCard from './BigCard';
import { database } from '../components/firebase'

interface Article {
    title: string;
    img: string;
    slug: string;
    content: string;
}


function Blog() {

    const [blog, setBlog] = useState<Article>();

    async function getBlog() {
        const slug = window.location.href.split("/").pop();
        let blog: Article = await database.ref('/blogs/' + slug).once('value').then(function (snapshot) {
            return snapshot.val();
        });

        setBlog(blog);
    }

    useEffect(() => {
        getBlog();
    }, []);

    if (!blog) {
        return (<div>Il n'existe pas d'article portant ce nom</div>)
    }
    return (
        <div>
            <BigCard
                title={blog.title}
                content={blog.content}
                img={blog.img}
                slug={blog.slug}
            />
        </div>
    );
}

export default Blog;