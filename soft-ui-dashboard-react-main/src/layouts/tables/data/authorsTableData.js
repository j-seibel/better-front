/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "league", align: "left" },
    { name: "competitors", align: "center" },
    { name: "date", align: "center" },
    { name: "Made bet", align: "right" },
  ],

  rows: [
    {
      league: "NBA",
      competitors: "Lakers vs Knicks",
      date: "March 15, 2024",
      "Made bet": "No"
    },
    {
      league: "MLS",
      competitors: "Inter Miami vs. LA Galaxy",
      date: "April 2, 2024",
      "Made bet": "Yes"
    },
    {
      league: "USTA",
      competitors: "S. Williams vs. N. Osaka",
      date: "May 10, 2024",
      "Made bet": "Yes"
    },
    {
      league: "NFL",
      competitors: "Packers vs Cowboys",
      date: "September 8, 2024",
      "Made bet": "No"
    },
    {
      league: "MLB",
      competitors: "Yankees vs. Red Sox",
      date: "September 20, 2024",
      "Made bet": "No"
    },
  ],
};

export default authorsTableData;
