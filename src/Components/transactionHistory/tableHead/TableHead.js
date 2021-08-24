import styles from '../TransactionHistory.module.css';

const TableHead = () => {
    return (
        <thead className={styles.head}>
            <tr>
                <th className={styles.type}>Type</th>
                <th className={styles.amount}>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
    );
}

export default TableHead;