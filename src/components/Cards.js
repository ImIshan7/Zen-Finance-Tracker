import React from "react";
import { Card, Row } from "antd";
import balance from "../../src/assets/balance.png";
import incomeimage from "../../src/assets/income.png";
import expencesimage from "../../src/assets/expences.png";
function Cards({
                   currentBalance,
                   income,
                   expenses,
                   showExpenseModal,
                   showIncomeModal,
                   cardStyle,
                   reset,
               }) {
    return (
        <Row
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "space-between",
            }}
        >

            <Card bordered={true} style={cardStyle}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <img
                        src={balance}
                        style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '20px' }}
                    />
                    <div>
                        <h2>Current Balance</h2>
                        <p>${currentBalance}</p>
                    </div>

                </div>
                <div className="btn btn-blue" style={{ margin: 0 }} onClick={reset}>
                    Reset Balance
                </div>
            </Card>


            <Card bordered={true} style={cardStyle}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <img
                        src={incomeimage}
                        style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '20px' }}
                    />
                    <div>

                        <h2>Total Income</h2>
                        <p>${income}</p>

                    </div>
                </div>
                <div
                    className="btn btn-blue"
                    style={{ margin: 0 }}
                    onClick={showIncomeModal}
                >
                    Add Income
                </div>
            </Card>

            <Card bordered={true} style={cardStyle}>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <img
                        src={expencesimage}
                        style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '20px' }}
                    />
                    <div>


                        <h2>Total Expenses</h2>
                        <p>${expenses}</p>

                    </div>
                </div>
                <div className="btn btn-blue" onClick={showExpenseModal}>
                    Add Expense
                </div>
            </Card>
        </Row>
    );
}

export default Cards;
