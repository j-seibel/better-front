import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import PropTypes from "prop-types";
import "./styles.css";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import TimelineItem from "examples/Timeline/TimelineItem";
import { fetchBets, updateTokenBalance } from "./getBets";

// Dummy data
const sportBetItems = [
  {
    color: "success",
    icon: "sports_basketball", // Relevant icon for basketball
    title: "Los Angeles Lakers vs Boston Celtics",
    dateTime: "Sunday February 18th 7:20PM",
  },
  {
    color: "error",
    icon: "sports_baseball", // Relevant icon for baseball
    title: "New York Yankees vs Chicago Cubs",
    dateTime: "Saturday February 17th 11PM",
  },
  {
    color: "info",
    icon: "sports_basketball", // Relevant icon for basketball
    title: "Golden State Warriors vs Houston Rockets",
    dateTime: "Saturday February 17th 9:34PM",
  },
  {
    color: "primary",
    icon: "sports_baseball", // Relevant icon for baseball
    title: "Boston Red Sox vs New York Yankees",
    dateTime: "Wednesday February 14th 4:54AM",
  },
];


const SportBetTimeline = ({ sbetItems }) => {
  return (
    <>
      {sbetItems.map((item, index) => (
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
  sbetItems: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      dateTime: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function OrdersOverview() {
  const [sbetItems, setSbetItems] = useState(sportBetItems);

  useEffect(() => {
    async function wrapper() {
      if (sbetItems.length === 4) {
        // Fetch new bets
        const nbets = await fetchBets();
        const temp = nbets[0]
        if(temp.done == false){
          const extraItem = {
            color: "dark",
            icon: "sports_soccer",
            title: temp["competitors"],
            dateTime: "Sunday February 18th 5:00PM",
          };
          setSbetItems([extraItem, ...sbetItems]);
        }else{
          updateTokenBalance(179.53)
        }
        
      }
    }
    wrapper();
  }, [sbetItems]);

  return (
    <Card className="h-100, outercard">
      <SoftBox pt={3} px={3}>
        <SoftTypography variant="h6" fontWeight="medium">
          Current Bets
        </SoftTypography>
        <SoftBox mt={1} mb={2}>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            <SoftTypography
              display="inline"
              variant="body2"
              verticalAlign="middle"
            >
              <Icon
                sx={{
                  fontWeight: "bold",
                  color: ({ palette: { success } }) => success.main,
                }}
              >
                check
              </Icon>
            </SoftTypography>
            &nbsp;
            <SoftTypography variant="button" color="text" fontWeight="medium">
              {sbetItems.length}
            </SoftTypography>{" "}
            active
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox p={2}>
        <SportBetTimeline sbetItems={sbetItems}></SportBetTimeline>
      </SoftBox>
    </Card>
  );
}

export default OrdersOverview;
