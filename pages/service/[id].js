import styles from '../../styles/Staff.module.css';


export const getStaticPaths = async () => {
    const res = await fetch ("https://jsonplaceholder.typicode.com/users/");
    const data = await res.json();

    const paths = data.map(staff => {
        return {
            params: { id: staff.id.toString() }
        }
    })

    return {
        paths,
        fallback: false 
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json();

    return {
        props: { staff: data }
    }
}


const PageDetails = ({ staff }) => {
    return (
        <div className="details">
            <h1 className={styles.titles}>{  staff.name }</h1>
            <p className={styles.single}>{ staff.email }</p>
            <p className={styles.single}>{ staff.phone }</p>
            <p className={styles.single}>{ staff.website }</p>
            <p className={styles.single}>{ staff.address.city }</p>
        </div>
    );
}
 
export default PageDetails;