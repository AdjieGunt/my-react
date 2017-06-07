import React    from 'react';
import DataStore    from './../stores/DataStore.js';



function renderArticles(articles) {
    if (articles.length > 0) {
        return articles.map((article, index) => (
            <Article key={index} article={article} />
        ));
    } else return [];
}

const Article = ({article}) => {

    return (
        <article key={article.id}>
            <h4>{article.title.rendered}</h4>
            <p dangerouslySetInnerHTML={{__html : article.excerpt.rendered}}></p>
        </article>
    );
};

class Home extends React.Component {

    render() {
        let allData = DataStore.getAll();
        const articles = renderArticles(allData.posts);      
        console.log(articles);
        return (
            <section>
                { articles }
            </section>
        );
    }
}

export default Home;