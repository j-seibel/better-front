// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SoftAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "friend", align: "left" },
      { name: "Most Recent Bet", align: "left" },
    ],

    rows: [
      {
        friend: [team1, "Alice Johnson"],
        "Most Recent Bet": "NBA Championship",
      },
      {
        friend: [team2, "Michael Smith "],
        "Most Recent Bet": "Wimbledon Women Singles",
      },
      {
        friend: [team3, "Emily Brown"],
        "Most Recent Bet": "Super Bowl",
      },
      {
        friend: [team4, "David Thompson"],
        "Most Recent Bet": "Formula 1 World Championship",
      },
      {
        friend: [team2, "Samantha Lee"],
        "Most Recent Bet": "French Open Men's Single",
      }
      // {
      //   companies: [logoXD, "Soft UI XD Version"],
      //   members: (
      //     <SoftBox display="flex" py={1}>
      //       {avatars([
      //         [team1, "Ryan Tompson"],
      //         [team2, "Romina Hadid"],
      //         [team3, "Alexander Smith"],
      //         [team4, "Jessica Doe"],
      //       ])}
      //     </SoftBox>
      //   ),
      // },
      //   budget: (
      //     <SoftTypography variant="caption" color="text" fontWeight="medium">
      //       $14,000
      //     </SoftTypography>
      //   ),
      //   completion: (
      //     <SoftBox width="8rem" textAlign="left">
      //       <SoftProgress value={60} color="info" variant="gradient" label={false} />
      //     </SoftBox>
      //   ),
      // },
    ],
  };
}
