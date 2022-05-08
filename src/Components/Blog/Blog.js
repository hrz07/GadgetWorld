import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blogContainer'>
            <div>
                <h2>Q1. Difference between javascript and nodejs</h2>
                <p>JavaScript is a script type programming language. It is used to make client site. JavaScript can't run on machine. It is run on browser only. Javascript frameworks are ReactJS, VUE , RamdaJS, TypedJS etc</p>

                <p>In the other side NodeJS is runtime of javascript. It can outsite of browser. Basically nodejs used to build server site. popular nodejs frameworks are Expressjs , Lodash etc.</p>
            </div>
            <div>
                <h2>Q2. When should you use nodejs and when should you use mongodb ?</h2>
                <p>Nodejs is a runtime of javascript. I'll use nodejs when i need to build a server and api. Nodejs helps to made a connection to frontEnd to database. </p>
                <p>Mongodb is a no sql database system. I will use mongodb when i need to use a storage of my website. Language of mongodb name is bson. It is look like json formate.</p>
            </div>
            <div>
                <h2>Q3. Differences between sql and nosql databases.</h2>
                <p>Actually sql is relational database tye. And its schema is static or fixed type. Sql is best for complex queries. </p>
                <p>In the other side, NoSql is non-relational database system. Its schema is dynamic types. This type database are good for hierarchical data storage</p>
            </div>
            <div>
                <h2>Q4. What is the purpose of jwt and how does it work?</h2>
                <p>Full form of jwt is JSON web token. It is use to share security information between frontEnd and backEnd. </p>
                <p>In JWT system, it create a token. This token has three parts header, payload abd signature. When user login in it create a token and send it to front end. Save it to browser storage and again send it to backend. Then then token are compared if there are same or not. If they were same then user can access data, if not then user can't access data.</p>
            </div>
        </div>
    );
};

export default Blog;