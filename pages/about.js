import styles from '../styles/About.module.css';
import Head from 'next/head';

const About = () => {
    return (
        <>
            <Head>
                <title>IncTech | About</title>
                <meta name='keywords' content='incdot'/>
            </Head>
            <div>
                <h1 className={styles.header}>About Me</h1>
                <p className={styles.txt}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia vero laborum repudiandae quasi libero voluptatum, nihil deleniti tenetur provident enim consequuntur quam assumenda culpa impedit illum. Dolor quis necessitatibus dolorum.</p>
                <p className={styles.txt}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia vero laborum repudiandae quasi libero voluptatum, nihil deleniti tenetur provident enim consequuntur quam assumenda culpa impedit illum. Dolor quis necessitatibus dolorum.</p>
            </div>
        </>
     );
}
 
export default About;