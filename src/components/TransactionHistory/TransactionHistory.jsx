import Transaction from './Transaction';
import s from './Transactions.module.css';

const TransactionHistory = ({ transactionsList }) => {
  return (
    <table className={s.TransactionHistory}>
      {/* <caption>Transaction History</caption> */}
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactionsList.map(t => (
          <Transaction
            key={t.id}
            type={t.type}
            amount={t.amount}
            currency={t.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
