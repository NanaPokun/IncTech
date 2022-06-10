import Head from 'next/head';
import styles from '../../styles/Staff.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { staffs: data }
    }
}

const Staff = ({ staffs }) => {
    return (
        <>
        <Head>
            <title>IncTech | Service</title>
            <meta name='keywords' content='incdot'/>
        </Head>
        <div>
            <h1 className={styles.titles}>All IncTech Staff</h1>
            { staffs.map(staff => (
                <Link href={"/service/" + staff.id } key={ staff.id }>
                    <a className={styles.single}>
                        <h3>{ staff.name }</h3>
                    </a>
                </Link>
            ))}
        </div>
        </>
    );
}
 
export default Staff;