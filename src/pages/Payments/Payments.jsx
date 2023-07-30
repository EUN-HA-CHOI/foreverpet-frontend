// React Hooks
import { useState } from "react";

// CSS
import styles from "../../styles/css/pages/Payments/Payments.module.css";

// Components
import Title from "../../common/Title/Title";
import PaymentsAmountInfo from "../../components/Payments/PaymentsAmountInfo";
import PaymentsProductOrderInfo from "../../components/Payments/PaymentsProductOrderInfo";
import PaymentsOwnerInfo from "../../components/Payments/PaymentsOwnerInfo";
import PaymentsDeliveryInfo from "../../components/Payments/PaymentsDeliveryInfo";
import PaymentsType from "../../components/Payments/PaymentsType";
import PaymentsFinal from "../../components/Payments/PaymentsFinal";

const Payments = () => {
  const [paymentReinfo, setPaymentReInfo] = useState({
    ownerName: "",
    ownerTel: "",
    ownerEmail: "",
    deliveryName: "",
    deliveryMainAddress: "",
    deliverySubAddress: "",
    deliveryTel: "",
  });
  const [paymentsFinalAmount, setPaymentsFinalAmount] = useState(0);

  // 결제정보 (주문자, 배송지) 업데이트
  const updatePaymentInfo = (e) => {
    const { name, value } = e.target;
    setPaymentReInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // 결제버튼 금액 확인
  const paymentsAmountBtn = (amount) => setPaymentsFinalAmount(amount);

  return (
    <div className={styles["payments-wrap"]}>
      <div
        style={{
          width: "100%",
          height: "202px",
          position: "fixed",
          backgroundColor: "teal",
          zIndex: "20",
        }}
      >
        헤더임
      </div>
      <div className={styles["payments-info"]}>
        <div className={styles["payments-text"]}>
          <Title title="주문결제" />
        </div>
        <div className={styles["payments-info__list"]}>
          <PaymentsProductOrderInfo dummyOrderListData={dummyOrderListData} />
        </div>
        <div className={styles["payments-info__list"]}>
          <PaymentsOwnerInfo
            paymentReinfo={paymentReinfo}
            updatePaymentInfo={updatePaymentInfo}
          />
        </div>
        <div className={styles["payments-info__list"]}>
          <PaymentsDeliveryInfo
            paymentReinfo={paymentReinfo}
            updatePaymentInfo={updatePaymentInfo}
          />
        </div>
        <div className={styles["payments-info__list"]}>
          <PaymentsType />
        </div>
        <div className={styles["payments-info__list"]}>
          <PaymentsFinal
            paymentsFinalAmount={paymentsFinalAmount}
            paymentReinfo={paymentReinfo}
            dummyOrderListData={dummyOrderListData}
          />
        </div>
      </div>
      <div className={styles["payments-info-amount"]}>
        <PaymentsAmountInfo
          dummyOrderListData={dummyOrderListData}
          paymentsAmountBtn={paymentsAmountBtn}
        />
      </div>
    </div>
  );
};

export default Payments;
