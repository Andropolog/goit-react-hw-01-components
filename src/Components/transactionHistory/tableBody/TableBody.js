import styles from '../TransactionHistory.module.css';

const TableBody = ({items}) => {
    return (
        <tbody className={styles.body}>
            {items.map(({id, type, amount, currency})=> (
                <tr className={styles.bodyItem} key={id}>
                    <td className={styles.type}>{type}</td>
                    <td className={styles.amount}>{amount}</td>
                    <td>{currency}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default TableBody;