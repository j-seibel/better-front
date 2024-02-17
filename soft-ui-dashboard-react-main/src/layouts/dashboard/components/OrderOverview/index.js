/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import PropTypes from 'prop-types';

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import TimelineItem from "examples/Timeline/TimelineItem";

const sportBetItems = [
  {
    color: "success",
    icon: "notifications",
    title: "Bet on Football Match: Win $100",
    dateTime: "22 DEC 7:20 PM",
  },
  {
    color: "error",
    icon: "inventory_2",
    title: "Basketball Game: Lost bet, $50",
    dateTime: "21 DEC 11 PM",
  },
  {
    color: "info",
    icon: "shopping_cart",
    title: "Tennis Tournament: Bet on Player A to Win",
    dateTime: "21 DEC 9:34 PM",
  },
  {
    color: "warning",
    icon: "payment",
    title: "New card added for bet #4395133",
    dateTime: "20 DEC 2:20 AM",
  },
  {
    color: "primary",
    icon: "vpn_key",
    title: "Horse Racing: Bet on Horse X to Place",
    dateTime: "18 DEC 4:54 AM",
  },
  {
    color: "dark",
    icon: "paid",
    title: "New bet #9583120",
    dateTime: "17 DEC",
  },
];



const SportBetTimeline = ({ betItems }) => {
  return (
    <>
      {betItems.map((item, index) => (
        <TimelineItem
          key={index}
          color={item.color}
          icon={item.icon}
          title={item.title}
          dateTime={item.dateTime}
        />
      ))}
    </>
  );
};

SportBetTimeline.propTypes = {
  betItems: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      dateTime: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function OrdersOverview() {
  return (
    <Card className="h-100">
      <SoftBox pt={3} px={3}>
        <SoftTypography variant="h6" fontWeight="medium">
          Current Bets
        </SoftTypography>
        <SoftBox mt={1} mb={2}>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            <SoftTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
                check
              </Icon>
            </SoftTypography>
            &nbsp;
            <SoftTypography variant="button" color="text" fontWeight="medium">
              {sportBetItems.length}
            </SoftTypography>{" "}
            active
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox p={2}>
        <SportBetTimeline betItems={sportBetItems}></SportBetTimeline>
      </SoftBox>
    </Card>
  );
}

export default OrdersOverview;
